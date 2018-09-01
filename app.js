function init() {
  let ul = document.querySelector("#image-slider")
  let liItems = ul.children
  imageNumber = liItems.length
  imageWidth = liItems[0].children[0].offsetWidth
  ul.style.width = imageNumber * imageWidth + "px"

  function animate(opts) {
    let start = new Date()
    let id = setInterval(() => {
      let timePassed = new Date() - start
      let position = parseInt(timePassed / opts.duration)

      // Reset count
      if (position + 1 > imageNumber) {
        clearInterval(id)
        animate(opts)
      }

      ul.style.left = `-${imageWidth * (position - 1)}px`
    }, opts.duration)
  }

  animate({
    duration: 5000
  })
}

window.onload = init

// let currentImage = 0
// let ul
// let liItems
// let imageWidth
// let imageNumber

// function init() {
//   ul = document.getElementById("image-slider")
//   liItems = ul.children
//   imageNumber = liItems.length
//   imageWidth = liItems[0].children[0].offsetWidth
//   ul.style.width = parseInt(imageWidth * imageNumber) + "px"
//   slider(ul)
// }

// function slider(ul) {
//   animate({
//     delay: 17,
//     duration: 3000,
//     delta: function(p) {
//       return Math.max(0, -1 + 2 * p)
//     },
//     step: function(delta) {
//       ul.style.left =
//         "-" + parseInt(currentImage * imageWidth + delta * imageWidth) + "px"
//     },
//     callback: function() {
//       currentImage++
//       // if it doesn’t slied to the last image, keep sliding
//       if (currentImage < imageNumber - 1) {
//         slider(ul)
//       }
//       // if current image it’s the last one, it slides back to the first one
//       else {
//         let leftPosition = (imageNumber - 1) * imageWidth
//         // after 2 seconds, call the goBack function to slide to the first image
//         setTimeout(function() {
//           goBack(leftPosition)
//         }, 2000)
//         setTimeout(function() {
//           slider(ul)
//         }, 4000)
//       }
//     }
//   })
// }

// function goBack(leftPosition) {
//   currentImage = 0
//   let id = setInterval(function() {
//     if (leftPosition >= 0) {
//       ul.style.left = "-" + parseInt(leftPosition) + "px"
//       leftPosition -= imageWidth / 10
//     } else {
//       clearInterval(id)
//     }
//   }, 17)
// }

// //generic animate function
// function animate(opts) {
//   let start = new Date()
//   let id = setInterval(function() {
//     let timePassed = new Date() - start
//     let progress = timePassed / opts.duration
//     if (progress > 1) {
//       progress = 1
//     }
//     let delta = opts.delta(progress)
//     opts.step(delta)
//     if (progress == 1) {
//       clearInterval(id)
//       opts.callback()
//     }
//   }, 3000)
// }
// window.onload = init
