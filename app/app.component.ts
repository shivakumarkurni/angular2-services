import{Component} from '@angular/core';

import{PostService} from './services/post.service';
import{PostComponent} from './services/post.component';

@Component({
	selector:'my-app',
	template:`<posts></posts>`,
	providers:[PostService]

})

export class AppComponent{}