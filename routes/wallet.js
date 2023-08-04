
 import addWallet from "../controllers/addWallet/index";
 import addWalletValidator from "../controllers/addWallet/validator";
 import addWalletUser from "../controllers/addWalletUser/index";
 import addWalletUserValidator from "../controllers/addWalletUser/validator";
 import addWalletTransaction from "../controllers/addWalletTransaction/index";
 import addWalletTransactionValidator from "../controllers/addWalletTransaction/validator";

export default router => {
    router.post("/add-wallet", addWalletValidator, addWallet);
    router.post("/add-wallet-user", addWalletUserValidator, addWalletUser);
    router.post("/add-wallet-transaction", addWalletTransactionValidator,addWalletTransaction);
};