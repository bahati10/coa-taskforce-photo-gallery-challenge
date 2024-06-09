# Interactive Photo Gallery Challenge

Hosted Version Link:[Photo Gallery](https://coa-taskforce-photo-gallery-challenge.vercel.app/)

Here's a breakdown of how you might implement an interactive photo gallery based on the provided Figma designs, incorporating the best aspects of the approaches:

## Approach

### HTML Structure

The HTML structure is simple and clean, consisting of a main container element that holds individual gallery items. Each gallery item includes:

- An image element to display the picture.
- A wrapper element for the information overlay, which contains: - The name of the species. - The location where the species can be found. - A "know more" link.
  **Example:**

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Photo Gallery</title>
  </head>
  <body>
    <main class="container">
      <div class="card-item image-container-1">
        <img src="/assets/fennec fox.jpg" alt="Fennec Fox image" />
        <div class="information">
          <div class="information-text">
            <h3 class="species-names">FONNEC<br />FOX</h3>
            <h5 class="species-place">India</h5>
            <h4 class="know-more">
              know more <i class="fa-solid fa-arrow-right"></i>
            </h4>
          </div>
        </div>
      </div>
    </main>
    ``` ## CSS Styling The CSS is responsible for styling the gallery layout,
    individual gallery items, and the hover effects. Key points include: The
    main container is styled using flexbox or grid to ensure a responsive layout
    that adapts to different screen sizes. Gallery items are positioned and
    sized appropriately to maintain a uniform look. Hover effects are
    implemented using CSS transitions to provide smooth visual feedback. For
    example, on hover, the image might scale up slightly, apply agrayscale
    filter, and blur, while the information overlay becomes visible. Media
    queries are used to adjust the layout and styles for different screen sizes,
    ensuring the gallery is mobile-friendly. ## JavaScript Functionality
    JavaScript is used to add interactivity to the gallery. The main tasks
    handled by JavaScript include: Adding event listeners to each gallery item
    to handle hover events. On hover, JavaScript changes the styles of the image
    and the information overlay dynamically to show or hide elements and apply
    effects. The script ensures that the hover effects are applied correctly,
    including the transition of the image filter and the visibility of the
    information overlay. By combining these elements, I achieve a photo gallery
    that not only displays images but also provides additional contextual
    information in an engaging and interactive manner. The use of CSS for visual
    effects and JavaScript for interactivity ensures a smooth and responsive
    user experience.
  </body>
</html>
````
