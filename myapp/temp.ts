
// <li class="list-group-item d-inline-block mr-10 mb-2" >
    
//     <div class="container1">


        
//         <h3>{{ post.title }}</h3>
//         <p>{{ post.content }}</p>
//         <span><button class="btn btn-danger btn-sm" (click)="onPostDelete()">
//             Delete </button>
//         </span>
//         <span><button class="btn btn-warning btn-sm m-4 Update" (click)="onPostUpdate(post.id)">
//             Update </button>
//         </span>

        
//     </div>
//     <div class="container2">
//         <div class="col">
//             <label class="m-3">Title</label>
//             <div class="form-group col">
//                 <input type="text"  name="title" [(ngModel)]="post.title" ngModel required/>
//             </div>
//             <label class="m-3">Content</label>
//             <div class="form-group col">
//                 <textarea type="text" 
//                     cols="40" rows="10"
//                     name="content"
//                     [(ngModel)]="post.content" ngModel required></textarea>
//             </div>
//             <input class="col" type="text" name="id" value="{{ post.id }}" hidden>
//             <button class="btn btn-primary btn-sm m-2" type="submit">
//                 Submit
//             </button>
//         </div>
          
//     <div>
// </li>