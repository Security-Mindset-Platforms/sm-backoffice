export class AppSettings {
    public static API_ENDPOINT = 'http://127.0.0.1:5000/';
    public static BASE_URI='/santeproche/v1/';
    public static API_FIRESTORAGE = 'https://firebasestorage.googleapis.com/v0/b';
    public static PATH_MEDECIN = 'medecins/' + Date.now().toString();
    public static PATH_PATIENT = 'patients/' + Date.now().toString();
    public static FIREBASE = {
      apiKey: 'AIzaSyA--hkQCMgqLc_mUhMAmKUgyGvd-lA3z1I',
      authDomain: 'esante-7f686.firebaseapp.com',
      databaseURL: 'https://esante-7f686.firebaseio.com',
      projectId: 'esante-7f686',
      storageBucket: 'esante-7f686.appspot.com',
      messagingSenderId: '738374548340',
      appId: '1:738374548340:web:c0c2782a91fdeb1a480a21',
      measurementId: 'G-7PVWVLF255'
      };
    // AUTHENTIFICATION
    public static ENDPOINT_LOGIN_USER = 'visitor/auth/signin';
    public static ENDPOINT_CREATE_ADMIN = 'visitor/auth/signup';
    public static ENDPOINT_PASSWORD_FORGOT ="visitor/auth/password_forgot";
    public static ENDPOINT_IS_VALID_TOKEN  ='visitor/auth/checktoken/';
    public static ENDPOINT_RESET_PASSWORD= "visitor/auth/reset_password";
    public static ENDPOINT_SOUSCRIBE_NEWSLETTERS='newsletters/subscribe';
    public static ENDPOINT_CONTACT_US='newsletters/contact-us'
    public static ENDPOINT_USER_LIST = 'auth/admin/list';
    public static ENDPOINT_HISTORIQUES_LIST = 'logs/list';
    public static ENDPOINT_RESET_PASSWORD_USER_LOGGED = 'auth/user/logged/reset_password';
    public static ENDPOINT_FIND_USER_ID  = 'auth/user/'
    public static ENDPOINT_DISABLE_COUNT = 'auth/account/disable/'
    public static ENDPOINT_ENABLE_COUNT = 'auth/account/enable/';
    public static ENDPOINT_DELETE_COUNT ='auth/account/delete/';
    public static ENDPOINT_CHANGE_USER_ROLES = 'auth/account/change_roles/';
    public static ENDPOINT_CHANGE_USER_INFOS='auth/account/change_infos';
    public static ENDPOINT_AJOUTER_NOMENCLATURE ='nomenclatures/creer';
    public static ENDPOINT_MODIFIER_NOMENCLATURE ='nomenclatures/modifier';
    public static ENDPOINT_DONNEES_NOMENCLATURE ='nomenclatures/first';
    public static ENDPOINT_ENVOYER_MAIL='messagerie/envoyer';
    public static ENDPOINT_SUPPRIMER_MAIL='messagerie/supprimer';
    public static ENDPOINT_LIST_MAIL='messagerie/find';
    public static ENDPOINT_LISTE_DIFFUSION='newsletters/list'
    public static ENDPOINT_UPDATE_LISTE_DIFFUSION='newsletters/unsubscribe/liste';
    public static ENDPOINT_ENVOYER_DIFFUSION='newsletters/sendNotification';
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