import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserDataService} from "../../services/user/user-data.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: User[];
    loadingSpinner: boolean = true;
    isRecords: boolean = false;

    constructor(private userDataService: UserDataService) {
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.userDataService.getAllUser().subscribe(response => {
            this.users = response.users;
            this.loadingSpinner = false;
            this.isRecords = this.users.length === 0;
        });
    }

}
