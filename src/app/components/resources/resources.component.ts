import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  resources = [
    {
      id: 1,
      title: 'React JS',
      description: 'Master React JS for building dynamic user interfaces.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      id: 2,
      title: 'Node.js',
      description: 'Explore server-side programming with Node.js.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
    },
    {
      id: 3,
      title: 'Angular',
      description: 'Develop powerful web applications using Angular.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },
    {
      id: 4,
      title: 'HTML & CSS',
      description: 'Build responsive and accessible web pages with HTML and CSS.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
    },
    {
      id: 5,
      title: 'JavaScript',
      description: 'Learn JavaScript to make your web pages interactive.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    {
      id: 6,
      title: 'Python',
      description: 'Master Python programming for web development and data analysis.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    },
    {
      id: 7,
      title: 'Java',
      description: 'Learn Java for building robust and scalable applications.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg'
    },
    {
      id: 8,
      title: 'SQL',
      description: 'Master SQL for managing and querying relational databases.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'
    },
   
  ]

}
