document.addEventListener('DOMContentLoaded', () => {
    const productData = {
        "product": {
            "id": 6937548554342,
            "title": "Embrace Sideboard",
            "description": "<p>The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.</p>",
            "vendor": "Marmeto",
            "product_type": "Cloth",
            "price": "$12999.00",
            "compare_at_price": "$19999.00",
            "options": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        { "Yellow": "#ECDECC" },
                        { "Green": "#BBD278" },
                        { "Blue": "#BBC1F8" },
                        { "Pink": "#FFD3F8" }
                    ]
                },
                {
                    "name": "Size",
                    "position": 2,
                    "values": [
                        "Small",
                        "Medium",
                        "Large",
                        "Extra large",
                        "XXL"
                    ]
                }
            ],
            "images": [
                { "src": "https://s3-alpha-sig.figma.com/img/d636/7d6d/f34ce14e7187edeeb026d73413e4a29c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZodDcY2kA0Ni06gad~zdgxR7wFAFtlfm-FU-mw-eLZTbXt43ZX9HifCQez2EY-UWilImSyTcz95Po9lemBNkPk-dY4AtcncHPEvB5hDRieK~qY-fiKWw5L80YNQo~9iu-JrYX~KlN1-gzHY9GpfI1MF0mDsygyZ3t0RHnQiBY-UwpPKir~QHnC4~1Y1CckIfhk9Jy4BnVB~yutTVd7xTrlpMl~LyDJ2X2p3isa~h7wl63zOONAdfs2BxtX1pVB~3hYKgjYR1KmseIaauFj3J2vAZw3zOykZ5p08lDFt64XB6wnOgz1f9pQA8Di8jGfEfHdwBg~mYZuoKojGOm~nNjw__" },
                { "src": "https://s3-alpha-sig.figma.com/img/7f07/20f0/38539658df252c621f52c64231e8986a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=er7D~Yqemuiz4sOI19rEUTfNdet8aFlyevDFJzZqurTD6tW-5KhKUhEwW58xY55RDtfMq7fB0D~bmwLexRXYwZY2JQ3aLHyitO7DP8eHOwmMBq23GQbeykqDPQZdmlnVl~Pp5iRRqu2zTlKkH1GWyFMkUeEeRaDFXYzEY3EkwyoQ4FjzeE2RHNeCpT4bVYAJ9V5T~AuQv~Ll3vN8ztBlyGdUcVsmAN7CRR5ReoVJz9NaFeJShHzuXmga2YSc8OmQ6-ADBDn2rqc0b-Fj5mu~O3X7-I2P1bJOz6g75PpYfV-o7pbAFcYwloXrHVFbb5Na6B1EDOoAeMzZ2VNPH3qYrA__" },
                { "src": "https://s3-alpha-sig.figma.com/img/8a12/5fd1/8ad1df2ca3d3367baa54e79cf0caeff1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUkEXovAGTNcuJocpxAQSwMgwTNy1vCU8E2Fa~wQJRGSBms4ojajberZ7wAUzVgsbUJwkmDnKLGv4RuAYL~urulIK~p5b7yFq7je8SLnkEet3FeIzcgJI77LtKG-6yrFZplDC0rIAKemC5kfzS4ryuXxIZvXfH0PsoaEZqCCC0WFdHAGblzsNZUQJMYah2gaQ3WINtRf7JgnJIc2e-vo0N7yUufZ9mJP1MK66Myt3oNcNkp8bIACIpfxC-xqC-t4SlCFPZ5-yLtsEi12iC0DjAjTeiMxBVDkxa5u4IeeIwqJdp7VDtpkym0eGIE7WX2x8UtnHprayAHsZI1L8aTEow__" },
                { "src": "https://s3-alpha-sig.figma.com/img/2b85/4ec0/815f49c8ce3ddd231e2da63ce0596dc4?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mVj~0c4ZeS2wQGMAC-j8ftumA9ifF6T4LarB0tVtaFz0ZcuWSLPzXzce2q4buLCuv578VMkFlPgqmxnHYYxdTBEZmYTJy60R6ZFIxb2mTgtG9cFNyHWKoH8-XeCDzmGc-hypclW6ehzEjtztOhA~-RfzpagEO9blhOLWmwqwetxT3spGTlOqtf7-epF2Wg3OaYpA28RCcnFVA2Fmfg0WtyZG2R5VFwfSg8UfBfacx8UCtwFck4eTZGgME-k~-sPkiVhgNAsYV5QN9Pkc2I~UcCO6phyJ2vsc1hUgztItGs-gYK0cyUTAi53HQSEPo3ALzl5YqPbXpVGH9OfAdnWqCw__" }
            ]
        }
    };

    const product = productData.product;
    let selectedColor = null; // Track the currently selected color
    let selectedSize = null; // Track the currently selected size

    // Display product details
    document.getElementById('product-vendor').innerText = product.vendor;
    document.getElementById('product-title').innerText = product.title;
    document.getElementById('product-description').innerHTML = product.description;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('compare-at-price').innerText = product.compare_at_price;
    const mainImage = document.getElementById("main-image");
    const decrementbtn = document.getElementById('decrement');
    const incrementbtn = document.getElementById('increment');
    const quantity = document.getElementById('quantity');
    const colorPicker = document.getElementById('color-picker');
    const sizePicker = document.getElementById('size-picker');
    const discount = document.getElementById('percentage');
    discount.innerText = `${Math.round((100 - (parseInt(product.price.slice(1)) / parseInt(product.compare_at_price.slice(1))) * 100))}% Off`;

    // Display product images
    const productImagesContainer = document.getElementById('image-variants');
    product.images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.className = 'sub-image';
        imgElement.src = image.src;
        productImagesContainer.appendChild(imgElement);

        imgElement.addEventListener('click', () => {
            // Remove border from all images
            const allImages = document.querySelectorAll('.sub-image');
            allImages.forEach(img => img.style.border = 'none');

            // Set border to the clicked image
            imgElement.style.border = "3px solid ";
            imgElement.style.borderImageSource= "linear-gradient(136.22deg, #3A4980 2.59%, rgba(44, 48, 121, 0.2) 97.48%)";
            imgElement.style.borderImageSlice= "1";
            imgElement.style.borderImageOutset= "0"; 
            // Update the main image
            mainImage.style.backgroundImage = `url(${image.src})`;
        });

        // Select the first image by default
        if (index === 0) {
            mainImage.style.backgroundImage = `url(${image.src})`;
            imgElement.style.border = "3px solid ";
            imgElement.style.borderImageSource= "linear-gradient(136.22deg, #3A4980 2.59%, rgba(44, 48, 121, 0.2) 97.48%)";
            imgElement.style.borderImageSlice= "1";
            imgElement.style.borderImageOutset= "0"; 
        }
    });

    // Populate color options
    product.options[0].values.forEach((colorObject, index) => {
        for (const [colorName, colorValue] of Object.entries(colorObject)) {
            const colorDiv = document.createElement('div');
            const containerDiv = document.createElement('div');
            containerDiv.className = 'color-option-container';
            colorDiv.className = 'color-option';
            const imgElement = document.createElement('img');
            imgElement.src = "./Vector (Stroke).svg";
            imgElement.alt = "Check";
            imgElement.style.display = "none"; // Initially hide the checkmark

            colorDiv.style.backgroundColor = colorValue;
            colorDiv.setAttribute('data-color', colorValue);
            colorDiv.setAttribute('title', colorName);
            colorDiv.appendChild(imgElement);
            containerDiv.appendChild(colorDiv);
            colorPicker.appendChild(containerDiv);

            if (index === 0) {
                // Select the first color by default
                containerDiv.style.border = `3px solid ${colorValue}`;
                colorDiv.classList.add('selected');
                selectedColor = colorDiv;
                imgElement.style.display = "block"; // Show the checkmark for the default color
            }

            containerDiv.addEventListener('click', () => {
                // Remove 'selected' class and border from previously selected color
                if (selectedColor) {
                    selectedColor.classList.remove('selected');
                    selectedColor.parentElement.style.border = 'none';
                    selectedColor.querySelector('img').style.display = "none"; // Hide the previous checkmark
                }

                // Add 'selected' class and border to the clicked color
                containerDiv.style.border = `3px solid ${colorValue}`;
                colorDiv.classList.add('selected');
                colorDiv.querySelector('img').style.display = "block"; // Show the checkmark for the selected color
                selectedColor = colorDiv; // Update the selected color
            });
        }
    });

    // Populate size options
    product.options[1].values.forEach(size => {
        const sizeRadio = document.createElement('input');
        sizeRadio.type = 'radio';
        sizeRadio.name = 'size';
        sizeRadio.value = size;
        sizeRadio.id = size.toLowerCase(); // Use size as id
        const sizeLabel = document.createElement('label');
        sizeLabel.setAttribute('for', size.toLowerCase());
        sizeLabel.textContent = size;
        const sizeDiv = document.createElement('div');
        sizeDiv.className = 'size-option';
        sizeDiv.appendChild(sizeRadio);
        sizeDiv.appendChild(sizeLabel);
        sizePicker.appendChild(sizeDiv);
        sizeDiv.style.cursor = 'pointer';
        sizeLabel.style.cursor = 'pointer';
        sizeLabel.style.color = "#726C6C"
        sizeRadio.style.cursor = 'pointer';

        sizeDiv.addEventListener('click', () => {
            sizeRadio.click();
            
            selectedSize = sizeRadio.value; // Update the selected size
            const allRadios = document.querySelectorAll('input[type="radio"][name="size"]');
            allRadios.forEach(radio => {
                const label = document.querySelector(`label[for="${radio.id}"]`);
                label.style.color = '#726C6C'; // Reset label color
            });
            const allSizeDivs = document.querySelectorAll('.size-option');
            allSizeDivs.forEach(div => {
                div.style.backgroundColor = '#F3F3F3'; // Reset background color
            });


            // Apply dynamic styling to selected radio button and label
            sizeLabel.style.color = '#3A4980'; // Change label color
             sizeDiv.style.backgroundColor = "#EDF0F8"
             
        });
    });

    // Add to Cart button functionality
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const messageDisplay = document.getElementById('cart-message');
    const messageContainer = document.getElementById('message-container');

    addToCartBtn.addEventListener('click', () => {
        if (selectedColor && selectedSize) {
            const message = `${product.title} with Color ${selectedColor.getAttribute('title')} and  Size ${selectedSize} added to cart.`;
            messageDisplay.textContent = message;
            messageContainer.style.display = 'flex';

            setTimeout(() => {
                messageContainer.style.display = 'none';
            }, 5000); // Hide message after 5 seconds
        }

        if (selectedColor === null || selectedSize === null) {
            messageDisplay.textContent = 'Please select both color and size before adding to cart.';
            messageContainer.style.display = 'flex';
        }
    });

    decrementbtn.addEventListener('click', () => {
        if (parseInt(quantity.innerText) > 1) {
            let Quantityvalue = parseInt(quantity.innerText);
            Quantityvalue = Quantityvalue - 1;
            quantity.innerText = Quantityvalue;
        }
    });

    incrementbtn.addEventListener('click', () => {
        let Quantityvalue = parseInt(quantity.innerText);
        Quantityvalue = Quantityvalue + 1;
        quantity.innerText = Quantityvalue;
    });

});
