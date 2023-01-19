"use strict"

const storyMedia = document.querySelector(".storyMedia"),
  playStory = document.querySelector(".playStory")


playStory.addEventListener("click", () => {
  if(storyMedia.paused) {
    storyMedia.play()
  } else {
    storyMedia.pause()
  }
})