WHERE YOUR UPLOADS GO
=====================

Any file you want other students to download — PDF, image, DOCX, a .py script.
Keep filenames short and use dashes, no spaces:

    pf-loops-revision.pdf
    dbms-normalisation-sheet.pdf
    oop-past-paper-solved.pdf

Then open script.js, find CONFIG.notes.items and add one entry:

    {
      course: "Programming Fundamentals",
      topic:  "Loops, functions and scope — one-page revision sheet",
      when:   "Oct 2026",
      format: "PDF",
      size:   "180 KB",
      file:   "assets/notes/pf-loops-revision.pdf",
      note:   "The three loop types side by side, plus the off-by-one mistakes I kept making."
    }

Notes:
 - `file` must match the filename exactly, including capital letters.
 - `size` is optional — leave it out and only the format tag shows.
 - Leave `file` as "" and the row still appears but shows "Upload pending"
   instead of a download link. Useful when you want to announce something
   that is not ready yet.
 - The whole section shows a friendly "nothing yet" message while
   CONFIG.notes.items is empty, so it is safe to publish before your first
   upload.
 - Only upload material that is yours to share. Do not upload a lecturer's
   slides or a paid textbook — that is someone else's copyright.
