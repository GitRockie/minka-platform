import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })

export class ProjectService {

    private projectsKey = 'projects';
    private projectSubject: BehaviorSubject<Project | null>;
    public project: Observable<Project | null>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.projectSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('project')!));
    this.project = this.projectSubject.asObservable();
  }

  public get projectsValue() {
    return this.projectSubject.value;
}

  createProject(project: Project): void {
    const projects = this.getAllProjectsFromStorage();
    project.id = this.generateProjectId();
    projects.push(project);
    this.saveProjectsToStorage(projects);
  }

  getAllProjects(): Project[] {
    return this.getAllProjectsFromStorage();
  }

  getProjectById(id: string): Project | null {
    const projects = this.getAllProjectsFromStorage();
    return projects.find((project) => project.id === id) || null;
  }

  updateProject(project: Project): void {
    const projects = this.getAllProjectsFromStorage();
    const index = projects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      projects[index] = project;
      this.saveProjectsToStorage(projects);
    }
  }

  deleteProject(id: string): void {
    let projects = this.getAllProjectsFromStorage();
    projects = projects.filter((project) => project.id !== id);
    this.saveProjectsToStorage(projects);
  }

  private getAllProjectsFromStorage(): Project[] {
    const projectsJson = localStorage.getItem(this.projectsKey);
    return projectsJson ? JSON.parse(projectsJson) : [];
  }

  private saveProjectsToStorage(projects: Project[]): void {
    localStorage.setItem(this.projectsKey, JSON.stringify(projects));
  }

  private generateProjectId(): string {
    // Generate a unique ID for the project, such as using a UUID library
    // You can also use simpler approaches like generating a timestamp-based ID
    return 'generated-project-id';
  }
}