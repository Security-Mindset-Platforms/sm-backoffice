export class ContactModel {

    nom: string;
    sujet: string;
    mail: string;
    tel: string;
    message: string;
    destinataire?: string;
    constructor(

        nom: string,
        sujet: string,
        mail: string,
        tel: string,
        message: string,
        ) {
       this.mail = mail;
       this.sujet = sujet;
       this.tel = tel;
       this.message = message;
       this.nom = nom;
    }
}
