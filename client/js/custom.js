'use strict'

$(() => {
  // get the current year
  let date = new Date()
  let year = date.getFullYear()

  // copyright message
  let copyright = y => `© ${y} Vanielle Le`

  // printing copyright() along with year() to #copyright
  $('#copyright').text(copyright(year))
})
