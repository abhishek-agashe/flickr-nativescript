import 'reflect-metadata';
import {TextView} from 'ui/text-view';
import {topmost} from 'ui/frame';
import {nativeScriptBootstrap} from 'nativescript-angular/application';
import {Inject, Component, View} from 'angular2/core';
import {TodoStore, Todo} from './services/store';
import {Checkbox} from './checkbox';


@Component({
    selector: 'main',
    //providers: [TodoStore],
    //directives: [Checkbox],
    template: `
        <TabView id="tabView1"  tabsBackgroundColor="#222222">
    <TabView.items>
       <TabViewItem title="Exlore">
           <TabView.view>
               <Label text="Explore"></Label>
           </TabView.view>
       </TabViewItem>
      <TabViewItem title="Search">
        <TabViewItem.view>
            
          <Label text="This is Label in Tab 1" ></Label>
        </TabViewItem.view>
      </TabViewItem>
      <TabViewItem title="Camera">
        <TabViewItem.view>
            
              <Label text="Camera" ></Label>
 
        </TabViewItem.view>
      </TabViewItem>
    </TabView.items>
  </TabView>
    `})
class MainPage {
    //private  todoStore: TodoStore;

    constructor() {
        // this.todoStore = new TodoStore();
        // this.todoStore.add("item 1", true);
        // this.todoStore.add("item 2", false);
        // this.todoStore.add("abhishek", true);
    }
}

export function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = "";

    console.log('BOOTSTRAPPING...');
    nativeScriptBootstrap(MainPage, []).then((appRef) => {
        console.log('ANGULAR BOOTSTRAP DONE.');
    }, (err) =>{
        console.log('ERROR BOOTSTRAPPING ANGULAR');
        let errorMessage = err.message + "\n\n" + err.stack;
        console.log(errorMessage);

        let view = new TextView();
        view.text = errorMessage;
        topmost().currentPage.content = view;
    });
}
