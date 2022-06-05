export default function getSVMmodel() {
  //   const SVM = require("libsvm-js/asm");
  //   const svm = new SVM({
  //     kernel: SVM.KERNEL_TYPES.RBF, // The type of kernel I want to use
  //     type: SVM.SVM_TYPES.C_SVC, // The type of SVM I want to run
  //     gamma: 0.001, // RBF kernel gamma parameter
  //     cost: 0.001, // C_SVC cost parameter
  //   });

  //   const features = [
  //     [280, 285, 5, 32],
  //     [273, 281, 8, 27],
  //     [295, 299, 4, 29],
  //     [310, 313, 3, 38],
  //     [298, 300, 2, 35],
  //     [323, 320, 3, 45],
  //     [245, 240, -5, 36],
  //     [238, 237, -1, 38],

  //     [185, 175, -10, 18],
  //     [177, 168, -9, 20],
  //     [165, 163, -2, 22],
  //     [190, 180, -10, 19],
  //     [188, 180, -8, 17],
  //     [70, 60, -10, 15],
  //     [63, 57, -5, 12],
  //     [40, 42, 2, 16],
  //   ];
  //   const labels = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  //   svm.train(features, labels); // train the model

  //   console.log(svm.serializeModel());
  return `svm_type c_svc
  kernel_type rbf
  gamma 0.001
  nr_class 2
  total_sv 16
  rho -0.000214525
  label 1 0
  nr_sv 8 8
  SV
  0.001 1:280 2:285 3:5 4:32
  0.001 1:273 2:281 3:8 4:27
  0.001 1:295 2:299 3:4 4:29
  0.001 1:310 2:313 3:3 4:38
  0.001 1:298 2:300 3:2 4:35
  0.001 1:323 2:320 3:3 4:45
  0.001 1:245 2:240 3:-5 4:36
  0.001 1:238 2:237 3:-1 4:38
  -0.001 1:185 2:175 3:-10 4:18
  -0.001 1:177 2:168 3:-9 4:20
  -0.001 1:165 2:163 3:-2 4:22
  -0.001 1:190 2:180 3:-10 4:19
  -0.001 1:188 2:180 3:-8 4:17
  -0.001 1:70 2:60 3:-10 4:15
  -0.001 1:63 2:57 3:-5 4:12
  -0.001 1:40 2:42 3:2 4:16
  `;
}
