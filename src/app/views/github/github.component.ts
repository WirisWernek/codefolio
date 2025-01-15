import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../../models/repository.model';
import { EditorHeaderComponent } from "../../shared/components/editor-header/editor-header.component";
import { RepositoryComponent } from "./components/repository/repository.component";

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [AsyncPipe, RepositoryComponent, EditorHeaderComponent],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss'
})
export class GithubComponent implements OnInit {

	public readonly http = inject(HttpClient);
	repositories$!: Observable<Repository[]>;

	ngOnInit(): void {
		this.readFile();
	}

	readFile() {
		// Read file
		const urlToJson = 'files/repositories.json';
		this.repositories$ = this.http.get<Repository[]>(urlToJson);
	}
}
