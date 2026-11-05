---
title: "Distilling Knowledge"
date: "2026-11-05"
summary: "A reflection on Hinton, Vinyals, and Dean's knowledge-distillation paper — and my own attempt to reproduce the MNIST experiment in PyTorch."
tags: ["Knowledge Distillation", "Deep Learning", "MNIST"]
paper:
  title: "Distilling the Knowledge in a Neural Network"
  authors: "Hinton, Vinyals & Dean"
  year: 2015
  url: "https://arxiv.org/abs/1503.02531"
---

This article is my reiteration of and reflection on the paper "Distilling the Knowledge in a Neural Network" by Geoffrey Hinton, Oriol Vinyals, and Jeff Dean at Google (Hinton et al., 2015). The paper is about training smaller networks to learn knowledge and generalization from larger and bulkier networks or ensembles of networks. Smaller networks are easier and more realistic to use for real-time tasks, and they also save compute and time. However, a smaller network trained on the raw data alone usually doesn't generalize as well as a larger one. In this paper, the authors build on earlier work on model compression by Caruana and his collaborators (Buciluă et al., 2006) and propose a training technique called "distillation" that enables smaller networks to learn from larger networks and generalize well to unseen data.

How? Let us call the larger network the teacher network, and the smaller network the student network. We train the teacher network normally on the training data and allow it to learn the patterns in the data. Once the teacher network starts performing well on test data, or is "trained well", we can start with the student network. The student network is usually much smaller than the teacher network and can be trained on unlabeled data or on the original training set. The authors found that the original training set works well, especially when the student is also trained to predict the true labels.

Let us call the data that the student network trains on the "transfer set." We get the targets for the transfer set by running it through the teacher network and dividing the teacher's logits by a temperature T before the softmax. T is a scalar value that we set higher than 1 to produce a smoother distribution with higher entropy.

> "When the soft targets have high entropy, they provide much more information per training case than hard targets and much less variance in the gradient between training cases, so the small model can often be trained on much less data than the original cumbersome model and using a much higher learning rate." (Hinton et al., 2015, p. 2)

Then, we train the student network on these softened targets at the same high temperature. In practice, the student is trained on a weighted average of two objectives: matching the soft targets at the high temperature, and predicting the true labels at a temperature of 1, with a much lower weight on the second one. Note that during deployment, we bring the temperature back down to 1. What happens if we deploy with the high temperature? How does setting the temperature high affect the objective function and the gradient of the cross-entropy loss?

## Interesting results that convinced me this works

### MNIST dataset

This is a dataset of 70,000 greyscale images of handwritten digits from 0 to 9 (LeCun et al., 1998). The authors trained an MLP with 2 hidden layers of 1,200 ReLU units each on 60,000 training cases. It was regularized heavily using dropout and weight constraints, and the input images were jittered by up to two pixels. This network got 67 test errors on 10,000 test cases. A student network with 800 units in each of its 2 hidden layers, with no regularization and no training on the teacher's softmax outputs, got 146 test errors. However, after being trained on the teacher's softmax probabilities at a temperature of 20, the student got only 74 errors. I find this a convincing result that shows how much the student network can learn from the teacher network. What's even more interesting is that the student picked up what the teacher learned from the jittered images, even though the transfer set had no jittered images in it.

There is also another interesting result from dropping the digit 3 from the transfer set during distillation, where the student makes 206 test errors overall, of which 133 are on 3s. I find 133 errors out of 1,010 examples of 3s quite impressive, given that the network has never seen a 3 before. Most of these errors happen because the learned bias for the 3 class is too low. Even better, after increasing the bias for 3 by 3.5, the distilled model made 109 errors, of which only 14 were on 3s. That's 98.6% of the 3s correct! (One catch: the 3.5 was picked because it gave the best result on the test set itself.)

I am not going to go into every result to keep this piece concise, but here are some results tables from the paper that I find very compelling. Refer to the paper for more explanation.

### Speech recognition

| System | Test Frame Accuracy | WER |
| --- | --- | --- |
| Baseline | 58.9% | 10.9% |
| 10× Ensemble | 61.1% | 10.7% |
| Distilled Single Model | 60.8% | 10.7% |

*Table 1 from Hinton et al. (2015): Frame classification accuracy and WER showing that the distilled single model performs about as well as the averaged predictions of 10 models that were used to create the soft targets.*

Here, a single distilled model performs better than the baseline model and nearly as well as the ensemble of 10 models. The distilled model is the same size as the baseline, so this one isn't about a smaller architecture. It shows that one model can learn to generalize almost as well as a whole ensemble, given the right conditions and data.

| System & training set | Train Frame Accuracy | Test Frame Accuracy |
| --- | --- | --- |
| Baseline (100% of training set) | 63.4% | 58.9% |
| Baseline (3% of training set) | 67.3% | 44.5% |
| Soft Targets (3% of training set) | 65.4% | 57.0% |

*Table 5 from Hinton et al. (2015): Soft targets allow a new model to generalize well from only 3% of the training set. The soft targets are obtained by training on the full training set.*

### Summary of the experiment on MNIST

| Model / experiment | Test result | Interpretation |
| --- | --- | --- |
| Large regularized teacher network | 67 errors | Strong teacher model |
| Small unregularized network | 146 errors | Weaker student baseline |
| Small network trained with soft targets | 74 errors | Distillation transfers most of the teacher's knowledge |
| Student never trained on digit 3 | 206 errors; 133 errors on 3s | Soft targets still provide useful information about unseen classes |
| Same model with corrected digit-3 bias | 109 errors; only 14 errors on 3s | Bias correction greatly improves performance |

## Notes and thoughts

The paper presents more on the role of temperature, scaling the gradients when using temperature, more results on speech recognition and on JFT (Google's internal image dataset), specialist models, and more. Refer to the paper to get a complete picture. This is just a rough overview of the distillation process. Some key takeaways are:

- **Knowledge can be transferred:** it is not tied to the specific parameters of a network. The paper thinks of it as the learned mapping from inputs to outputs.
- **Class probabilities contain implicit information about how the classes are related.** The small probabilities given to the wrong classes carry this information, and a high temperature makes it visible.
- **A specific class can be identified from the generalization patterns** gleaned from the other classes it is associated with, as shown in the result with the digit 3 on the MNIST dataset.

## My reproduction

I wanted to see this for myself, so I tried to reproduce the MNIST experiment in PyTorch on Google Colab (on CPU, so it was slow). My first teacher (2 hidden layers of 1,200 units, dropout, 30 epochs, constant learning rate with Adam) got 171 test errors, and my student baseline (2 hidden layers of 800 units, no regularization, 20 epochs) got 167. The student matched the teacher! A teacher without dropout got 160. But these differences aren't statistically significant: at about 1.7% error on 10,000 test images, sampling noise alone is around ±13 errors. Checking the training errors showed that the dropout teacher was actually underfitting, with 247 errors out of 60,000 training images compared to 161 for the baseline. Dropout slows training down, and 30 epochs at a constant learning rate wasn't enough.

So I built a stronger teacher, closer to the paper's: random shifts of up to 2 pixels (jitter), 60 epochs, and a learning rate that decays with cosine annealing (Loshchilov & Hutter, 2017). This teacher got 81 test errors. I retrained the baseline with the same learning rate schedule, which brought it down to 128. Then I trained the distilled student at T = 20, with a weight of 0.9 on the soft targets and the soft loss multiplied by T².

| Model | Test errors (out of 10,000) |
| --- | --- |
| Teacher (1,200 × 2, dropout + jitter, 60 epochs) | 81 |
| Baseline student (800 × 2, hard labels, 20 epochs) | 128 |
| Distilled student (800 × 2, T = 20, 20 epochs) | 111 |

The distilled student clearly does better than the baseline, but the difference isn't as big as in the paper. It closed 17 of the 47 errors between the baseline and the teacher, while the paper closed about 91% of the gap. And it's a single run, so I can't be fully sure about the 17 either.

Some reasons I think the gap is smaller:

- My baseline is stronger, since the decaying learning rate also helped it a lot (167 → 128).
- T = 20 might be too high for my teacher. At T = 20, its soft targets were almost uniform.
- My setup is different from the paper's: a different optimizer and learning rate schedule, no weight constraints, and far fewer epochs.

One thing that confused me at first: the distilled student's loss stayed around 773 and barely moved. It turns out it can't go any lower. The loss is scaled by 0.9 × T² = 360, and 773 / 360 ≈ 2.15, which is about the entropy of the teacher's soft targets at T = 20. So the student had basically matched them already.

Next, I want to try a temperature sweep, run multiple seeds, and try distilling with the same random shifts applied to both the teacher and the student (Beyer et al., 2022).

## References

- Beyer, L., Zhai, X., Royer, A., Markeeva, L., Anil, R., & Kolesnikov, A. (2022). Knowledge distillation: A good teacher is patient and consistent. CVPR 2022. [arXiv:2106.05237](https://arxiv.org/abs/2106.05237)
- Buciluă, C., Caruana, R., & Niculescu-Mizil, A. (2006). Model compression. Proceedings of the 12th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 535–541. [doi:10.1145/1150402.1150464](https://doi.org/10.1145/1150402.1150464)
- Hinton, G., Vinyals, O., & Dean, J. (2015). Distilling the knowledge in a neural network. [arXiv:1503.02531](https://arxiv.org/abs/1503.02531)
- LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). Gradient-based learning applied to document recognition. Proceedings of the IEEE, 86(11), 2278–2324. [doi:10.1109/5.726791](https://doi.org/10.1109/5.726791)
- Loshchilov, I., & Hutter, F. (2017). SGDR: Stochastic gradient descent with warm restarts. ICLR 2017. [arXiv:1608.03983](https://arxiv.org/abs/1608.03983)
