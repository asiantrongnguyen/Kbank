define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'kpayment',
                component: 'Marvelic_KPayment/js/view/payment/method-renderer/kpayment-method'
            }
        );
        return Component.extend({});
    }
);