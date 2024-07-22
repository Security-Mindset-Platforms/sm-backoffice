export class AuthentificationEndPointsURI {
    //  PUBLIC END POINTS
    public static ENDPOINT_LOGIN_USER = 'public/auth/signin';
    public static ENDPOINT_RESEND_OTP_OR_LINK = 'public/auth/resend_activation_account';
    public static ENDPOINT_LOGIN_SIGNUP = 'public/auth/signup';
    public static ENDPOINT_LOGIN_SIGNUP_PATIENT = 'public/auth/patient/signup';
    public static ENDPOINT_PASSWORD_FORGOT ="public/auth/password_forgot";
    public static ENDPOINT_RESET_PASSWORD= "public/auth/reset_password";
    public static ENDPOINT_ENABLE_NEW_COUNT='public/auth/activate_new_account/';
    public static ENDPOINT_IS_VALID_TOKEN  ='public/auth/checktoken/';
    public static ENDPOINT_CREATE_COLLAB = 'public/auth/signup';
    public static ENDPOINT_REFRESH_SESSION= 'public/auth/refresh_token';
    public static ENDPOINT_RESET_PASSWORD_LOGGED_USER= "auth/account/reset_password";
    //  MANAGER END POINTS
    public static ENDPOINT_GENERATE_ADMIN_KEY = 'admin/generate_key';

    //  ADMIN END POINTS
    public static ENDPOINT_ACCOUNTS_STATS="auth/account/stats";

    // MODERATOR END POINTS

    //  EDITOR END POINTS

    // ANGULAR ROUTES


    public static ENDPOINT_SOUSCRIBE_NEWSLETTERS='newsletters/subscribe';
    public static ENDPOINT_CONTACT_US='public/newsletter/contact-us';
    //blog
    public static ENDPOINT_SAVE_BLOG = 'blogs/create';
    public static ENDPOINT_LIST_BLOG= 'blogs/list';
    public static ENDPOINT_BLOB_DETAILS='blogs/'
    public static ENDPOINT_UPDATE_BLOG="blogs/update";
    public static ENDPOINT_DELETE_BLOG="blogs/";
    public static ENDPOINT_COMMENTER_BLOG='blogs/commenter/';
    public static ENDPOINT_SUPPRIMER_COMMENTAIRE_BLOG='blogs/commentaire/delete/';
    public static ENDPOINT_USER_LIST = 'auth/admin/list';

    public static ENDPOINT_HISTORIQUES_LIST = 'logs/list';

    public static ENDPOINT_RESET_PASSWORD_USER_LOGGED = 'auth/user/logged/reset_password';

    public static ENDPOINT_FIND_USER_ID  = 'auth/user/'
    public static ENDPOINT_DISABLE_COUNT = 'auth/count/disable/'
    public static ENDPOINT_ENABLE_COUNT = 'auth/count/enable/';
    public static ENDPOINT_DELETE_COUNT ='auth/count/delete/';
    public static ENDPOINT_CHANGE_USER_ROLES = 'auth/count/change_roles/';
    public static ENDPOINT_CHANGE_USER_INFOS='auth/count/change_infos';

    public static ENDPOINT_SEND_MAIL_TO_USERS= "newsletters/contact_user";
    public static ENDPOINT_CREER_TICKET = 'tickets/creer';
    public static ENDPOINT_LIST_TICKET='tickets/list';
    public static ENDPOINT_DELETE_TICKET='tickets/delete/';
    public static ENDPOINT_TRAITER_TICKET = 'tickets/traiter';
    public static ENDPOINT_AJOUTER_NOMENCLATURE ='nomenclatures/creer';
    public static ENDPOINT_MODIFIER_NOMENCLATURE ='nomenclatures/modifier';
    public static ENDPOINT_DONNEES_NOMENCLATURE ='nomenclatures/first';
    public static ENDPOINT_ENVOYER_MAIL='messagerie/envoyer';
    public static ENDPOINT_SUPPRIMER_MAIL='messagerie/supprimer';
    public static ENDPOINT_LIST_MAIL='messagerie/find';

    public static ENDPOINT_LISTE_DIFFUSION='newsletters/list'
    public static ENDPOINT_UNSUBSCRIBE='public/newsletter/unsubscribe/';
    public static ENDPOINT_SUBSCRIBE_NEWSLETTER='public/newsletter/subscribe';
    public static ENDPOINT_ENVOYER_DIFFUSION='newsletters/sendNotification';


    public static ENDPOINT_SAVE_VOLONTAIRE='volontaires/creer';
    public static ENDPOINT_LIST_VOLONTAIRE='volontaires/list';
    public static ENDPOINT_UPDATE_VOLONTAIRE='volontaires/modifier';
    public static ENDPOINT_DELETE_VOLONTAIRE='volontaires/';
    public static ENDPOINT_VOLONTAIRE_DETAILS='volontaires/';

    public static ENDPOINT_SAVE_PARTENAIRE='partenaires/creer';
    public static ENDPOINT_LIST_PARTENAIRE='partenaires/list';
    public static ENDPOINT_UPDATE_PARTENAIRE='partenaires/modifier';
    public static ENDPOINT_DELETE_PARTENAIRE='partenaires/';
    public static ENDPOINT_PARTENAIRE_DETAILS='partenaires/';

    public static ENDPOINT_SAVE_FAQ='faqs/creer';
    public static ENDPOINT_LIST_FAQ='faqs/list';
    public static ENDPOINT_UPDATE_FAQ='faqs/modifier';
    public static ENDPOINT_DELETE_FAQ='faqs/';
    public static ENDPOINT_FAQ_DETAILS='faqs/';
    public static ENDPOINT_SAVE_GALLERIE ='galerie/creer';
    public static ENDPOINT_DELETE_GALLERIE ='galerie/';
    public static ENDPOINT_LIST_GALLERIE='galerie/list';

    public static ENDPOINT_SAVE_EVENT='events/create';
    public static ENDPOINT_UPDATE_EVENT='events/update';
    public static ENDPOINT_LIST_EVENT='events/list';
    public static ENDPOINT_EVENT_DETAILS='events/';
    public static ENDPOINT_DELETE_EVENT='events/';
    public static ENDPOINT_COMMENTER_EVENT='events/commenter/';
    public static ENDPOINT_PARTICIPANT_DELETE_EVENT='events/participer/delete/';

    public static accountTypes = [
      "MANAGER", "ADMIN", "MODERATOR", "EDITOR", "USER"
    ]
}
