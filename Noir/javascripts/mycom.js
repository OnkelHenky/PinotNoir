/**
 * Created by alex on 05.01.15.
 */
(function() {

    var link = document.querySelector('#binput');
    console.log('link = ');
    console.dir(link.content);

    document.MyStuff = {};

    var _myStuff = document.MyStuff;

    var b_input_proto =  Object.create(HTMLElement.prototype, {
        createdCallback: {
            value: function () {
                var shadow = this.createShadowRoot();


                //    var link = document.querySelector('link[#]');
                console.log('link = ');
                console.dir(link);

                var _import = link.import;
                console.dir(_import);


                var template = _import.querySelector('#b-input');
                console.dir(template);
                var clone = document.importNode(template.content, true);
                shadow.appendChild(clone);


                //     shadow.innerHTML = "<b>I'm in the element's Shadow DOM!</b>";
            }
        },
        attachedCallback: {
            value: function () {
                console.dir('@foo (A) = '+this.getAttribute('foo'));
            }
        }
    });



    _myStuff.binput = document.registerElement('b-input', {
        prototype: b_input_proto
    });



})();