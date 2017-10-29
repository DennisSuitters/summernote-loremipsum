# summernote-loremipsum
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

summernote-loremipsum will insert Random Lorem Ipsum text at the cursor position in the Editor.

### Installation

#### 1. Include JS

Include the following code after Summernote:

```html
<script src="summernote-loremipsum.js"></script>
```

#### 2. Supported languages

Currently available in English!

#### 3. Summernote options

````javascript
$('.summernote').summernote({
    toolbar:[
        ['style',['style']],
        ['font',['bold','italic','underline','clear']],
        ['fontname',['fontname']],
        ['color',['color']],
        ['para',['ul','ol','paragraph']],
        ['height',['height']],
        ['table',['table']],
        ['insert',['lorem','media','link','hr']], // 'lorem', is the dropdown menu
        ['view',['fullscreen','codeview']],
        ['help',['help']]
    ],
    lorem:{
        el:'.summernote', // Element ID or Class used to Initialise Summernote.
        html: true // Place Lorem Ipsum Paragraphs inside <p> or set to false to not too.
    }
});
````

#### 4. Check out our other Summernote Plugins via our main Github page.
- [Diemen Design](https://github.com/DiemenDesign/)
