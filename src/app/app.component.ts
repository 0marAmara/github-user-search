import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {SearchBoxComponent} from '@app/features/search/components/search-box/search-box.component';
import {UsersListComponent} from '@app/features/search/components/users-list/users-list.component';
import {GithubService} from '@services/github.service';
import {UserModel} from '@shared/models/user.model';
import {Subscription} from 'rxjs';
import {LoadingSpinnerComponent} from '@components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  imports: [
    SearchBoxComponent,
    UsersListComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private githubService = inject(GithubService);
  usersList:UserModel[] = [];
  isEmpty: boolean = false;
  errorMessage:string="";
  loadingSubscription!: Subscription;
  isLoading: boolean = false;


  ngOnInit() {
    this.loadingSubscription = this.githubService.isLoading.subscribe(isLoading => {
      this.isLoading = isLoading});
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

  searchForUsers(searchTerm: string) {

    this.githubService.searchUsers(searchTerm).subscribe({
      next: response => {
        this.errorMessage="";
        if(response.items.length > 0) {
          this.isEmpty=false;
          this.usersList = response.items;
        }else{
          this.isEmpty=true;
        }
      },
      error: error => {
        this.isEmpty=false;
        this.errorMessage = error.error.message;
      }
    });
  }
}
