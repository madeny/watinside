      * Place logos (prefer SVG) under: /assets/press/
            * the-verge.svg

            * techcrunch.svg

            * 9to5mac.svg

            * macstories.svg

            * imore.svg

            * wired.svg

            * lifehacker.svg

            * engadget.svg


Tutorial videos as posts
- Add a new file under _posts using this filename format: YYYY-MM-DD-your-tutorial-title.md
- Use the layout: tutorial and include the front matter fields shown in Template/tutorial-post-template.md
- Required: categories: [tutorial] and video_id: YOUR_YOUTUBE_ID
- Optional: featured (true/false), level, duration, thumbnail, description
- The tutorials listing page (tutorial.html) will automatically:
  - Choose the first post with featured: true as the featured video (or the latest tutorial if none featured)
  - Display all other tutorials as cards

Front matter example
Refer to Template/tutorial-post-template.md for a copy-paste template.
