WHAT GOES IN THIS FOLDER
========================

Screenshots and images the site uses. Keep filenames short, no spaces.

game/                           <-- real screenshots from The Last Light, captured by the
                                    game's own capture harness (scripts/dev/capture.gd)
                                    05_player_present_world.png   main project image
                                    09_world_memory.png           memory-world version
                                    13_journal.png                the journal screen
                                    17_beacon_kindled.png         level completion

placeholder.svg                 Generic image, shown if a project has no image set.

favicon.svg                     The little "A" in the browser tab. Already wired up in
                                index.html. You can leave it as it is.


HOW THE PROJECT IMAGE + GALLERY WORK
------------------------------------
In script.js a project has:

    image:   "assets/images/game/05_player_present_world.png",
    gallery: [
      { src: "assets/images/game/05_player_present_world.png", caption: "..." },
      { src: "assets/images/game/09_world_memory.png",         caption: "..." }
    ]

- `image` is the big picture shown first.
- `gallery` (optional) renders a row of thumbnails underneath. Clicking one
  swaps the big picture and updates the caption below it.
- Delete the whole `gallery:` block and only the single image shows.
- Make the first gallery entry identical to `image`, so the strip starts with
  the shot that is already on screen.
- Cards are 16:9, so any 16:9 crop fills them without distortion.


TIPS FOR A GOOD GAME SCREENSHOT
-------------------------------
- Play the game, press Win + PrtScn, then paste into Paint and crop to just the game window.
- Pick a moment with something happening: the lantern lit, a platform jump mid-air, dialogue on
  screen. An empty room screenshot looks like nothing works.
- Save as .png. 200-400 KB is plenty.
- Do not screenshot the Godot editor with the game inside it — screenshot the running game.
