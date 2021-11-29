import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users } from 'src/user';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ProfileService } from '../Services/profile.service';
import { IUsers } from 'src/app/user';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit {

  userId!: number;
  user!: IUsers;

  constructor(private profileService: ProfileService, private route: ActivatedRoute,
     private router: Router, private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    this.userId = this.route.snapshot.params['userId'];
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        this.user.photo = event.target?.result as string;
      }
      this.profileService.updateProfile(this.userId, this.user);
    }
  }
}
