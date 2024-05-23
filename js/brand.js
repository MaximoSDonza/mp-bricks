const mp = new MercadoPago('TEST-e294e60f-7e01-4683-8e3a-f472b22685f7', {
    locale: 'es-AR'
  });
  const bricksBuilder = mp.bricks();
  const renderBrandBrick = async (bricksBuilder) => {
    const settings = {
      customization: {
        texts: {
          valueProp: 'payment_methods',
          align: 'left',
          useCustomFont: false,
          size: 'medium',
          fontWeight: 'semibold',
          color: 'secondary',
        },
        paymentMethods: {
          excludedPaymentMethods: [],
          excludedPaymentTypes: [],
          maxInstallments: 12,
          interestFreeInstallments: false,
        },
        visual: {
          backgroundColor: 'white', 
          hideMercadoPagoLogo: false,
          border: false,
          borderColor: 'dark',
          contentAlign: 'center',
          borderWidth: '1px',
          borderRadius: '0px',
          verticalPadding: '8px',
          horizontalPadding: '16px',
        },
      },
      callbacks: {
        onReady: () => {
        /*
        Callback called when Brick is ready.
        Here you can hide loadings from your site, for example.
        */
        },
      },
    };
    window.brandBrickController = await bricksBuilder.create(
      'brand',
      'brandBrick_container',
      settings,
    );
  };
  renderBrandBrick(bricksBuilder);