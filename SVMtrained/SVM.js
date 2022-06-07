export default function getSVMmodel() {
  const SVM = require("libsvm-js/asm");
  //   const svm = new SVM({
  //     kernel: SVM.KERNEL_TYPES.RBF, // The type of kernel I want to use
  //     type: SVM.SVM_TYPES.C_SVC, // The type of SVM I want to run
  //     gamma: 0.001, // RBF kernel gamma parameter
  //     cost: 1, // C_SVC cost parameter
  //     probabilityEstimates: true,
  //   });

  //   const features = [
  //     [280, 285, 5],
  //     [273, 281, 8],
  //     [295, 299, 4],
  //     [310, 313, 3],
  //     [298, 300, 2],
  //     [323, 320, 3],
  //     [245, 240, -5],
  //     [238, 237, -1],

  //     [185, 175, -10],
  //     [177, 168, -9],
  //     [165, 163, -2],
  //     [190, 180, -10],
  //     [188, 180, -8],
  //     [70, 60, -10],
  //     [63, 57, -5],
  //     [40, 42, 2],
  //   ];
  //   const labels = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  //   svm.train(features, labels); // train the model

  //   console.log(svm.serializeModel());
  return `svm_type c_svc
  kernel_type rbf
  gamma 0.001
  nr_class 2
  total_sv 9
  rho 0.00271918
  label 1 0
  probA -2.55583
  probB -0.0520198
  nr_sv 5 4
  SV
  0.7888304319398047 1:273 2:281 3:8
  0.4174339428733529 1:298 2:300 3:2
  0.8394086751429229 1:323 2:320 3:3
  0.3053293691617866 1:245 2:240 3:-5
  0.6904068653945603 1:238 2:237 3:-1
  -0.7231191372574104 1:165 2:163 3:-2
  -0.7287060016088317 1:190 2:180 3:-10
  -0.7948133000657003 1:70 2:60 3:-10
  -0.7947708455804851 1:40 2:42 3:2
  `;
}
