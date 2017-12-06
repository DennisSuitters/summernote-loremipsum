/* https://github.com/DiemenDesign/summernote-loremipsum */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'],factory);
  } else if(typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
}(function ($) {
  $.extend(true,$.summernote.lang, {
    'en-US': {
      lorem: {
        tooltip: 'Lorem Ipsum'
      }
    }
  });
  $.extend($.summernote.options, {
    lorem: {
      html: true,
      icon: '<i class="note-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" id="libre-loremipsum"><path d="m 8.723427,10.008177 c 0.31103,-2.6465002 0.26145,-2.9171002 -0.42943,-2.3437002 -0.47899,0.3975 -0.78107,0.4395 -0.78107,0.1084 0,-0.2968 0.72779,-1.058 1.6173,-1.6914 l 1.61729,-1.1516 -0.34186,2.9087 c -0.34448,2.9309002 -0.0812,3.4439002 1.1646,2.2686002 0.54381,-0.5130002 0.63853,-0.5078002 0.47761,0.026 -0.1104,0.3664 -0.98269,1.1613 -1.93841,1.7664 l -1.73767,1.1003 0.35164,-2.992 z m -6.84211,1.0862 c 0,-0.6538 0.37915,-2.3015002 0.84256,-3.6615002 0.62803,-1.8432 0.70145,-2.6987 0.28837,-3.3602 -0.43953,-0.7038 -0.31575,-1.1114 0.59834,-1.9701 1.26364,-1.18709998 2.84314,-1.53729998 1.99723,-0.4428 -0.62949,0.8145 -2.19061,6.4936 -2.19061,7.969 0,1.2666002 0.17785,1.3332002 1.56956,0.5884002 1.65088,-0.8835002 1.10741,-0.038 -0.67362,1.0476 -2.13027,1.2988 -2.43183,1.2777 -2.43183,-0.1704 z m 8.46055,-9.0294002 c -0.18371,-0.2972 0.0361,-0.6824 0.48847,-0.856 1.12627,-0.43219998 1.47663,0.043 0.58028,0.7867 -0.50458,0.4187 -0.83937,0.4405 -1.06875,0.069 z"/></svg></i> &nbsp;<span class="caret"></span>',
      menu: [
        'Create Paragraph',
        'Create Sentence'
      ]
    }
  });
  $.extend($.summernote.plugins, {
    'lorem': function(context) {
      var ui        = $.summernote.ui,
          $note     = context.layoutInfo.note,
          options   = context.options,
          lang      = options.langInfo;
      context.memo('button.lorem', function () {
        var button = ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents:  options.lorem.icon,
            tooltip:   lang.lorem.tooltip,
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown({
            className: 'dropdown-template',
            items: options.lorem.menu,
            click: function (e) {
              var $button = $(e.target);
              var value = $button.data('value');
              e.preventDefault();
              if (value == 'Create Paragraph')
                var text = generateLoremText(1,LOREM_TEXT_TYPE.PARAGRAPH,options.lorem.html);
              else
                var text = generateLoremText(1,LOREM_TEXT_TYPE.SENTENCE,options.lorem.html);
              $note.summernote('pasteHTML', text);
            }
          })
        ]);
        return button.render();
      });
    }
  });
}));
var LOREM_TEXT_TYPE = {PARAGRAPH: 1, SENTENCE: 2, WORD: 3};
var LOREM_WORDS = ["lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit","ut","aliquam,","purus","sit","amet","luctus","venenatis,","lectus","magna","fringilla","urna,","porttitor","rhoncus","dolor","purus","non","enim","praesent","elementum","facilisis","leo,","vel","fringilla","est","ullamcorper","eget","nulla","facilisi","etiam","dignissim","diam","quis","enim","lobortis","scelerisque","fermentum","dui","faucibus","in","ornare","quam","viverra","orci","sagittis","eu","volutpat","odio","facilisis","mauris","sit","amet","massa","vitae","tortor","condimentum","lacinia","quis","vel","eros","donec","ac","odio","tempor","orci","dapibus","ultrices","in","iaculis","nunc","sed","augue","lacus,","viverra","vitae","congue","eu,","consequat","ac","felis","donec","et","odio","pellentesque","diam","volutpat","commodo","sed","egestas","egestas","fringilla","phasellus","faucibus","scelerisque","eleifend","donec","pretium","vulputate","sapien","nec","sagittis","aliquam","malesuada","bibendum","arcu","vitae","elementum","curabitur","vitae","nunc","sed","velit","dignissim","sodales","ut","eu","sem","integer","vitae","justo","eget","magna","fermentum","iaculis","eu","non","diam","phasellus","vestibulum","lorem","sed","risus","ultricies","tristique","nulla","aliquet","enim","tortor,","at","auctor","urna","nunc","id","cursus","metus","aliquam","eleifend","mi","in","nulla","posuere","sollicitudin","aliquam","ultrices","sagittis","orci,","a","scelerisque","purus","semper","eget","duis","at","tellus","at","urna","condimentum","mattis","pellentesque","id","nibh","tortor,","id","aliquet","lectus","proin","nibh","nisl,","condimentum","id","venenatis","a,","condimentum","vitae","sapien","pellentesque","habitant","morbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","sed","tempus,","urna","et","pharetra","pharetra,","massa","massa","ultricies","mi,","quis","hendrerit","dolor","magna","eget","est","lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit","pellentesque","habitant","morbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","integer","eget","aliquet","nibh","praesent","tristique","magna","sit","amet","purus","gravida","quis","blandit","turpis","cursus","in","hac","habitasse","platea","dictumst","quisque","sagittis,","purus","sit","amet","volutpat","consequat,","mauris","nunc","congue","nisi,","vitae","suscipit","tellus","mauris","a","diam","maecenas","sed","enim","ut","sem","viverra","aliquet","eget","sit","amet","tellus","cras","adipiscing","enim","eu","turpis","egestas","pretium","aenean","pharetra,","magna","ac","placerat","vestibulum,","lectus","mauris","ultrices","eros,","in","cursus","turpis","massa","tincidunt","dui","ut","ornare","lectus","sit","amet","est","placerat","in","egestas","erat","imperdiet","sed","euismod","nisi","porta","lorem","mollis","aliquam","ut","porttitor","leo","a","diam","sollicitudin","tempor","id","eu","nisl","nunc","mi","ipsum,","faucibus","vitae","aliquet","nec,","ullamcorper","sit","amet","risus","nullam","eget","felis","eget","nunc","lobortis","mattis","aliquam","faucibus","purus","in","massa","tempor","nec","feugiat","nisl","pretium","fusce","id","velit","ut","tortor","pretium","viverra","suspendisse","potenti","nullam","ac","tortor","vitae","purus","faucibus","ornare","suspendisse","sed","nisi","lacus,","sed","viverra","tellus","in","hac","habitasse","platea","dictumst","vestibulum","rhoncus","est","pellentesque","elit","ullamcorper","dignissim","cras","tincidunt","lobortis","feugiat","vivamus","at","augue","eget","arcu","dictum","varius","duis","at","consectetur","lorem","donec","massa","sapien,","faucibus","et","molestie","ac,","feugiat","sed","lectus","vestibulum","mattis","ullamcorper","velit","sed","ullamcorper","morbi","tincidunt","ornare","massa,","eget","egestas","purus","viverra","accumsan","in","nisl","nisi,","scelerisque","eu","ultrices","vitae,","auctor","eu","augue","ut","lectus","arcu,","bibendum","at","varius","vel,","pharetra","vel","turpis","nunc","eget","lorem","dolor,","sed","viverra","ipsum","nunc","aliquet","bibendum","enim,","facilisis","gravida","neque","convallis","a","cras","semper","auctor","neque,","vitae","tempus","quam","pellentesque","nec","nam","aliquam","sem","et","tortor","consequat","id","porta","nibh","venenatis","cras","sed","felis","eget","velit","aliquet","sagittis","id","consectetur","purus","ut","faucibus","pulvinar","elementum","integer","enim","neque,","volutpat","ac","tincidunt","vitae,","semper","quis","lectus","nulla","at","volutpat","diam","ut","venenatis","tellus","in","metus","vulputate","eu","scelerisque","felis","imperdiet","proin","fermentum","leo","vel","orci","porta","non","pulvinar","neque","laoreet","suspendisse","interdum","consectetur","libero,","id","faucibus","nisl","tincidunt","eget","nullam","non","nisi","est,","sit","amet","facilisis","magna","etiam","tempor,","orci","eu","lobortis","elementum,","nibh","tellus","molestie","nunc,","non","blandit","massa","enim","nec","dui","nunc","mattis","enim","ut","tellus","elementum","sagittis","vitae","et","leo","duis","ut","diam","quam","nulla","porttitor","massa","id","neque","aliquam","vestibulum","morbi","blandit","cursus","risus,","at","ultrices","mi","tempus","imperdiet","nulla","malesuada","pellentesque","elit","eget","gravida","cum","sociis","natoque","penatibus","et","magnis","dis","parturient","montes,","nascetur","ridiculus","mus","mauris","vitae","ultricies","leo","integer","malesuada","nunc","vel","risus","commodo","viverra","maecenas","accumsan,","lacus","vel","facilisis","volutpat,","est","velit","egestas","dui,","id","ornare","arcu","odio","ut","sem","nulla","pharetra","diam","sit","amet","nisl","suscipit","adipiscing","bibendum","est","ultricies","integer","quis","auctor","elit","sed","vulputate","mi","sit","amet","mauris","commodo","quis","imperdiet","massa","tincidunt","nunc","pulvinar","sapien","et","ligula","ullamcorper","malesuada","proin","libero","nunc,","consequat","interdum","varius","sit","amet,","mattis","vulputate","enim","nulla","aliquet","porttitor","lacus,","luctus","accumsan","tortor","posuere","ac","ut","consequat","semper","viverra","nam","libero","justo,","laoreet","sit","amet","cursus","sit","amet,","dictum","sit","amet","justo","donec","enim","diam,","vulputate","ut","pharetra","sit","amet,","aliquam","id","diam","maecenas","ultricies","mi","eget","mauris","pharetra","et","ultrices","neque","ornare","aenean","euismod","elementum","nisi,","quis","eleifend","quam","adipiscing","vitae","proin","sagittis,","nisl","rhoncus","mattis","rhoncus,","urna","neque","viverra","justo,","nec","ultrices","dui","sapien","eget","mi","proin","sed","libero","enim,","sed","faucibus","turpis","in","eu","mi","bibendum","neque","egestas","congue","quisque","egestas","diam","in","arcu","cursus","euismod","quis","viverra","nibh","cras","pulvinar","mattis","nunc,","sed","blandit","libero","volutpat","sed","cras","ornare","arcu","dui","vivamus","arcu","felis,","bibendum","ut","tristique","et,","egestas","quis","ipsum","suspendisse","ultrices","gravida","dictum","fusce","ut","placerat","orci","nulla","pellentesque","dignissim","enim,","sit","amet","venenatis","urna","cursus","eget","nunc","scelerisque","viverra","mauris,","in","aliquam","sem","fringilla","ut","morbi","tincidunt","augue","interdum","velit","euismod","in","pellentesque","massa","placerat","duis","ultricies","lacus","sed","turpis","tincidunt","id","aliquet","risus","feugiat","in","ante","metus,","dictum","at","tempor","commodo,","ullamcorper","a","lacus","vestibulum","sed","arcu","non","odio","euismod","lacinia","at","quis","risus","sed","vulputate","odio","ut","enim","blandit","volutpat","maecenas","volutpat","blandit","aliquam","etiam","erat","velit,","scelerisque","in","dictum","non,","consectetur","a","erat","nam","at","lectus","urna","duis","convallis","convallis","tellus,","id","interdum","velit","laoreet","id","donec","ultrices","tincidunt","arcu,","non","sodales","neque","sodales","ut","etiam","sit","amet","nisl","purus,","in","mollis","nunc","sed","id","semper","risus","in","hendrerit","gravida","rutrum","quisque","non","tellus","orci,","ac","auctor","augue","mauris","augue","neque,","gravida","in","fermentum","et,","sollicitudin","ac","orci","phasellus","egestas","tellus","rutrum","tellus","pellentesque","eu","tincidunt","tortor","aliquam","nulla","facilisi","cras","fermentum,","odio","eu","feugiat","pretium,","nibh","ipsum","consequat","nisl,","vel","pretium","lectus","quam","id","leo","in","vitae","turpis","massa","sed","elementum","tempus","egestas","sed","sed","risus","pretium","quam","vulputate","dignissim","suspendisse","in","est","ante","in","nibh","mauris,","cursus","mattis","molestie","a,","iaculis","at","erat","pellentesque","adipiscing","commodo","elit,","at","imperdiet","dui","accumsan","sit","amet","nulla","facilisi","morbi","tempus","iaculis","urna,","id","volutpat","lacus","laoreet","non","curabitur","gravida","arcu","ac","tortor","dignissim","convallis","aenean","et","tortor","at","risus","viverra","adipiscing","at","in","tellus","integer","feugiat","scelerisque","varius","morbi","enim","nunc,","faucibus","a","pellentesque","sit","amet,","porttitor","eget","dolor","morbi","non","arcu","risus,","quis","varius","quam","quisque","id","diam","vel","quam","elementum","pulvinar","etiam","non","quam","lacus","suspendisse","faucibus","interdum","posuere","lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit","duis","tristique","sollicitudin","nibh","sit","amet","commodo","nulla","facilisi","nullam","vehicula","ipsum","a","arcu","cursus","vitae","congue","mauris","rhoncus","aenean","vel","elit","scelerisque","mauris","pellentesque","pulvinar","pellentesque","habitant","morbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","maecenas","pharetra","convallis","posuere","morbi","leo","urna,","molestie","at","elementum","eu,","facilisis","sed","odio","morbi","quis","commodo","odio","aenean","sed","adipiscing","diam","donec","adipiscing","tristique","risus","nec","feugiat","in","fermentum","posuere","urna","nec","tincidunt","praesent","semper","feugiat","nibh","sed","pulvinar","proin","gravida","hendrerit","lectus","a","molestie"];
function generateLoremText (count, type, html) {
  switch (type) {
    case LOREM_TEXT_TYPE.PARAGRAPH:
      var paragraphsArray = new Array();
      for (var i = 0; i < count; i++) {
        paragraphsArray.push((html ? '<p>' : '') + generateLoremText(Math.floor((Math.random() * 10) + 10), LOREM_TEXT_TYPE.SENTENCE) + (html ? '</p>' : ''));
      }
      return paragraphsArray.join('\n');
    break;
    case LOREM_TEXT_TYPE.SENTENCE:
      var sentencesArray = new Array();
      for (var i = 0; i < count; i++) {
        var words = generateLoremText(Math.floor((Math.random() * 5) + 5), LOREM_TEXT_TYPE.WORD).split(' ');
        words[0] = words[0].substr(0, 1).toUpperCase()+words[0].substr(1);
        var sentences = words.join(' ');
        sentencesArray.push(sentences);
      }
      return(sentencesArray.join('. ') + '.').replace(/(\.\,|\,\.)/g, '.');
    break;
    case LOREM_TEXT_TYPE.WORD:
      var randomWordIndex = Math.floor((Math.random() * (LOREM_WORDS.length - 1)) + 1);
      return LOREM_WORDS.slice(randomWordIndex,randomWordIndex+count).join(' ');
    break;
  }
};
