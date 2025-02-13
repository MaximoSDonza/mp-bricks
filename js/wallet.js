const mp = new MercadoPago('TEST-e294e60f-7e01-4683-8e3a-f472b22685f7', {
    locale: 'es-AR'
  });
  const bricksBuilder = mp.bricks();
  const renderWalletBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        redirectMode: 'modal',
      },
      customization: {
        texts: {
          action: 'pay',
          valueProp: 'security_safety',
        },
        visual: {
          hideValueProp: false,
          buttonBackground: 'default', // default, black, blue, white
          valuePropColor: 'grey', // grey, white
          buttonHeight: '48px', // min 48px - max free
          borderRadius: '6px',
          verticalPadding: '16px', // min 16px - max free
          horizontalPadding: '0px', // min 0px - max free
        },
        checkout: {
          theme: {
            elementsColor: '#4287F5', // color hex code
            headerColor: '#4287F5', // color hex code
          },
        },
      },
      callbacks: {
        onReady: () => {
        /*
        Callback called when Brick is ready.
        Here you can hide loadings from your site, for example.
        */
        },
        onSubmit: (formData) => {
          /*
          Callback called when clicking Wallet Brick
          this is possible because the brick is a button
          at this time of submit, you must create the preference
          */
          const yourRequestBodyHere = {
            items: [
              {
                id: 'YOUR_PRODUCT_ID',
                title: 'YOUR_PRODUCT_TITLE',
                description: 'YOUR_PRODUCT_DESCRIPTION',
                quantity: YOUR_PRODUCT_QUANTITY,
                unit_price: YOUR_PRODUCT_UNIT_PRICE,
              },
            ],
            purpose: 'wallet_purchase',
          };
          return new Promise((resolve, reject) => {
            fetch('/create_preference', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
                body: JSON.stringify(formData),
              })
                .then((response) => response.json())
                .then((response) => {
                // resolve the promise with the ID of the preference
                resolve(response.preference_id);
              })
              .catch((error) => {
                // handle error response when trying to create preference
                reject();
              });
          });
        },
      },
    };
    window.walletBrickController = await bricksBuilder.create(
      'wallet',
      'walletBrick_container',
      settings,
    );
  };
  renderWalletBrick(bricksBuilder);
