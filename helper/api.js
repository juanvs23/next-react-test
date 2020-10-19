import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "http://ideas-digitales.tk/test-ecommerce",
    consumerKey: "ck_76d84262867d1339e53bb901d6e9d528cb38b27c",
    consumerSecret: "cs_51a44962bbd347015902c50a8d516ad0623dcaec",
    version: "wc/v3"
  });

  export default api