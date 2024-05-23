<?php
      use MercadoPago\MercadoPagoConfig;
      MercadoPagoConfig::setAccessToken("PROD_ACCESS_TOKEN");

      $client = new PreferenceClient();
      $preference = $client->create([
        "items"=> array(
          array(
            "title" => "My product",
            "quantity" => 1,
            "unit_price" => 2000
          )
        ),
        // Allow only logged payments. To allow guest payments you can delete omit this property
        "purpose" => "wallet_purchase"
      ]);
    ?>