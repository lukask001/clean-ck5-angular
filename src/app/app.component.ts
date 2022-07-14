import { Component } from '@angular/core';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as CKEditorInspector from '@ckeditor/ckeditor5-inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public Editor = ClassicEditor;

  title = 'ckeditor5pure';

  public onReady(editor: CKEditor5.Editor) {
    CKEditorInspector.attach(editor);
  }
}
