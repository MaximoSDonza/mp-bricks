const mp = new MercadoPago('TEST-e294e60f-7e01-4683-8e3a-f472b22685f7', { // Add your public key credential
    locale: 'es-AR'
  });
  const bricksBuilder = mp.bricks();
  const renderStatusScreenBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        paymentId: '1234567890', // Payment identifier, from which the status will be checked
      },
      customization: {
        visual: {
          hideStatusDetails: true,
          hideTransactionDate: true,
          style: {
            theme: 'default', // 'default' | 'dark' | 'bootstrap' | 'flat'
          }
        },
        backUrls: {
          'error': '<http://<your domain>/error>',
          'return': '<http://<your domain>/homepage>'
        }
      },
      callbacks: {
        onReady: () => {
          // Callback called when Brick is ready
        },
        onError: (error) => {
          // Callback called for all Brick error cases
        },
      },
    };
    window.statusScreenBrickController = await bricksBuilder.create('statusScreen', 'statusScreenBrick_container', settings);
  };
  renderStatusScreenBrick(bricksBuilder);