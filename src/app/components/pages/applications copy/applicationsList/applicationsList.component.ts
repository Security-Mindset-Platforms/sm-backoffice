import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import {BusinessService} from '../../../services/business.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [SharedModule,NgSelectModule,RouterModule],
  templateUrl: './applicationsList.component.html',
  styleUrls: ['./applicationsList.component.scss']
})
export class ApplicationsListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  projects = [

    
    {
      name: "SM Bug Bunty",
      link: "https://hunters.security-mindset.fr",
      id: "01",
      category:  ['Bug bounty', "Hunting"],
      photos: '/assets/images/head-hunting.png'
    },
    {
      name: "SM Phishing",
      link: "https://phishing.security-mindset.fr",
      id: "01",
      category:  ['Phishing', "Security", "Email"],
      photos: '/assets/images/phishing.png'
    },
    {
      name: "SM DAST",
      link: "https://dast.security-mindset.fr",
      id: "01",
      category:  ['DAST', "API Security"],
      photos: '/assets/images/security.png'
    },
    {
      name: "SM AppSec",
      link: "https://appsec.security-mindset.fr",
      id: "01",
      category:  ['SAST', "IaC", "SCA", "SBOM", "Container Scaning"],
      photos: '/assets/images/security-scan.png'
    },
    {
      name: "SM CTF",
      link: "https://ctf.security-mindset.fr",
      id: "01",
      category:  ['CTF', "Challenges"],
      photos: '/assets/images/capture-the-flag.png'
    },
    {
      name: "SM Vulnerability Management",
      link: "https://vulnerability.security-mindset.fr",
      id: "01",
      category:  ['Threat Management', "Vulnerability Management"],
      photos: '/assets/images/disruption.png'
    },
    {
      name: "SM Videos & Photos Checking",
      link: "https://videos.security-mindset.fr",
      id: "01",
      category:  ['Videos Checking', "Photos Checking"],
      photos: '/assets/images/broadcasting.png'
    },
    {
      name: "SM Cyber Quiz",
      link: "https://quizz.security-mindset.fr",
      id: "01",
      category:  ['Cyber Quiz'],
      photos: '/assets/images/quiz.png'
    },
    {
      name: "SM AI Security",
      link: "https://ai.security-mindset.fr",
      id: "01",
      category:  ['AI'],
      photos: '/assets/images/ai.png'
    },
    {
      name: "SM CTI",
      link: "https://cti.security-mindset.fr",
      id: "01",
      category:  ['CTI'],
      photos: '/assets/images/technology.png'
    },
    {
      name: "skill-up.training",
      link: "https://skill-up.training",
      id: "01",
      category:  ['DevOps','Cloud', 'DevSecOps'],
      photos: '/assets/images/online-learning.png'
    },
    {
      name: "Sm Audit",
      link: "https://audit.security-mindset.fr",
      id: "01",
      category:  ['Audit','Compliance'],
      photos: '/assets/images/search.png'
    },
    
    
    
  ]
applications: any[]= [];

constructor(public businessService: BusinessService){

}
ngOnInit(): void {
    this.retrieveData();
  }

retrieveData(){
  const sub = this.businessService.applicationList().subscribe(
    response => {
      this.applications = response;
    },
    error => {
      console.error('Error fetching data', error);
    }
  );
  this.subscription.add(sub);
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
