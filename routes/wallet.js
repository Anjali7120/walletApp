import addWallet from "../controllers/addWallet/index";
import addWalletValidator from "../controllers/addWallet/validator";
import addWalletUser from "../controllers/addWalletUser/index";
import addWalletUserValidator from "../controllers/addWalletUser/validator";
import addWalletTransaction from "../controllers/addWalletTransaction/index";
import addWalletTransactionValidator from "../controllers/addWalletTransaction/validator";

import editWallet from "../controllers/editWallet/index";
import editWalletValidator from "../controllers/editWallet/validator";
import editWalletUser from "../controllers/editWalletUser/index";
import editWalletUserValidator from "../controllers/editWalletUser/validator";
import editWalletTransaction from "../controllers/editWalletTransaction/index";
import editWalletTransactionValidator from "../controllers/editWalletTransaction/validator";

import listWallet from "../controllers/listWallet/index";
import listWalletUser from "../controllers/listWalletUser/index";
import listWalletTransaction from "../controllers/listWalletTransaction/index";

export default router => {
    router.post("/add-wallet", addWalletValidator, addWallet);
    router.post("/add-wallet-user", addWalletUserValidator, addWalletUser);
    router.post("/add-wallet-transaction", addWalletTransactionValidator,addWalletTransaction);


    router.post("/edit-wallet", editWalletValidator, editWallet);
    router.post("/edit-wallet-user", editWalletUserValidator, editWalletUser);
    router.post("/edit-wallet-transaction", editWalletTransactionValidator,editWalletTransaction);

    router.get("/list-wallet", listWallet);
    router.get("/list-wallet-user", listWalletUser);
    router.get("/list-wallet-transaction", listWalletTransaction);



};