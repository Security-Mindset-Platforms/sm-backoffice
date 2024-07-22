export class Historique {
    constructor(
      public id: string ='',
      public label: string,
      public actions: string,
      public date: string 
    ) {}
  }
  
  export class UserProfil {
    id: number;
    username: string = '';
    email: string = '';
    firstName: string = '';
    phone: string = '';
    address: string = '';
    lastName: string = '';
    historiques: Historique[] = []
    constructor(
    ) {}
  }
  