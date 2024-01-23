// var webd_pro=document.querySelector(".webd_pro")
//   var rotate = 0;
//   var diffrot = 0;

//   webd_pro.addEventListener("mouseleave", function (dets) {
//     gsap.to(webd_pro.querySelector(".webd_img"), {
//       opacity: 0,
//       ease: Power3,
//       duration: 0.5,
//     });
//   });

//   webd_pro.addEventListener("mousemove", function (dets) {
//     var diff = dets.clientY - webd_pro.getBoundingClientRect().top;
//     diffrot = dets.clientX - rotate;
//     rotate = dets.clientX;
//     gsap.to(webd_pro.querySelector(".webd_img"), {
//       opacity: 1,
//       ease: Power3,
//       top: diff-170,
//       left: dets.clientX,
//       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//     });
//   });

//   var design_pro=document.querySelector(".design_pro")
//   var rotate = 0;
//   var diffrot = 0;

//   design_pro.addEventListener("mouseleave", function (dets) {
//     gsap.to(design_pro.querySelector(".design_img"), {
//       opacity: 0,
//       ease: Power3,
//       duration: 0.5,
//     });
//   });

//   design_pro.addEventListener("mousemove", function (dets) {
//     var diff = dets.clientY - design_pro.getBoundingClientRect().top;
//     diffrot = dets.clientX - rotate;
//     rotate = dets.clientX;
//     gsap.to(design_pro.querySelector(".design_img"), {
//       opacity: 1,
//       ease: Power3,
//       top: diff-350,
//       left: dets.clientX,
//       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//     });
//   });