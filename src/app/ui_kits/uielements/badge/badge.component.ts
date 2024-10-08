import { Component } from '@angular/core';
import * as codeData from '../../../components/shared/prismData/badge';
import { SharedModule } from '../../../components/shared/shared.module';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  isContentVisible = false;
  isContentVisible1 = false;
  isContentVisible2 = false;
  isContentVisible3 = false;
  isContentVisible4 = false;
  isContentVisible5 = false;
  isContentVisible6 = false;
  isContentVisible7 = false;
  isContentVisible8 = false;
  isContentVisible9 = false;
  isContentVisible10 = false;
  isContentVisible11 = false;
  isContentVisible12 = false;

  toggleClass = "line";
  toggleClass1 = "line";
  toggleClass2 = "line";
  toggleClass3 = "line";
  toggleClass4 = "line";
  toggleClass5 = "line";
  toggleClass6 = "line";
  toggleClass7 = "line";
  toggleClass8 = "line";
  toggleClass9 = "line";
  toggleClass10 = "line";
  toggleClass11 = "line";
  toggleClass12 = "line";

  
  
  ts: string = codeData.badgeTS;
  ts1: string = codeData.badgeTS1;
  ts2: string = codeData.badgeTS2;
  ts3: string = codeData.badgeTS3;
  ts4: string = codeData.badgeTS4;
  ts5: string = codeData.badgeTS5;
  ts6: string = codeData.badgeTS6;
  ts7: string = codeData.badgeTS7;
  ts8: string = codeData.badgeTS8;
  ts9: string = codeData.badgeTS9;
  ts10: string = codeData.badgeTS10;
  ts11: string = codeData.badgeTS11;
  ts12: string = codeData.badgeTS12;

  toggleBadge() {
    this.isContentVisible = !this.isContentVisible;
    if (this.toggleClass === "line") {
      this.toggleClass = "s-slash-line";
    } else {
      this.toggleClass = "line";
    }
  }
  togglePillBadge() {
    this.isContentVisible1 = !this.isContentVisible1;
    if (this.toggleClass1 === "line") {
      this.toggleClass1 = "s-slash-line";
    } else {
      this.toggleClass1 = "line";
    }
  }
  toggleLightBadge() {
    this.isContentVisible2 = !this.isContentVisible2;
    if (this.toggleClass2 === "line") {
      this.toggleClass2 = "s-slash-line";
    } else {
      this.toggleClass2 = "line";
    }
  }
  toggleLightPillBadge() {
    this.isContentVisible3 = !this.isContentVisible3;
    if (this.toggleClass3 === "line") {
      this.toggleClass3 = "s-slash-line";
    } else {
      this.toggleClass3 = "line";
    }
  }
  toggleGradientBadge() {
    this.isContentVisible4 = !this.isContentVisible4;
    if (this.toggleClass4 === "line") {
      this.toggleClass4 = "s-slash-line";
    } else {
      this.toggleClass4 = "line";
    }
  }
  
  toggleGradientPillBadge() {
    this.isContentVisible5 = !this.isContentVisible5;
    if (this.toggleClass5 === "line") {
      this.toggleClass5 = "s-slash-line";
    } else {
      this.toggleClass5 = "line";
    }
  }
  toggleOutlineBadge() {
    this.isContentVisible6 = !this.isContentVisible6;
    if (this.toggleClass6 === "line") {
      this.toggleClass6 = "s-slash-line";
    } else {
      this.toggleClass6 = "line";
    }
  }
  toggleOutlinePillBadge() {
    this.isContentVisible7 = !this.isContentVisible7;
    if (this.toggleClass7 === "line") {
      this.toggleClass7 = "s-slash-line";
    } else {
      this.toggleClass7 = "line";
    }
  }
  toggleButtonBadge() {
    this.isContentVisible8 = !this.isContentVisible8;
    if (this.toggleClass8 === "line") {
      this.toggleClass8 = "s-slash-line";
    } else {
      this.toggleClass8 = "line";
    }
  }
  toggleOutlineButtonBadge() {
    this.isContentVisible9 = !this.isContentVisible9;
    if (this.toggleClass9 === "line") {
      this.toggleClass9 = "s-slash-line";
    } else {
      this.toggleClass9 = "line";
    }
  }
  toggleHeadings() {
    this.isContentVisible10 = !this.isContentVisible10;
    if (this.toggleClass10 === "line") {
      this.toggleClass10 = "s-slash-line";
    } else {
      this.toggleClass10 = "line";
    }
  }
  togglePositionedBadge() {
    this.isContentVisible11 = !this.isContentVisible11;
    if (this.toggleClass11 === "line") {
      this.toggleClass11 = "s-slash-line";
    } else {
      this.toggleClass11 = "line";
    }
  }
  togglePositionedBadge2() {
    this.isContentVisible12 = !this.isContentVisible12;
    if (this.toggleClass12 === "line") {
      this.toggleClass12 = "s-slash-line";
    } else {
      this.toggleClass12 = "line";
    }
  }

}



  
  

  

  

  

  
  

  

  

