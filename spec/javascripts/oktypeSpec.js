describe('oktype', function(){
    
    var originalFont;

    describe('with default options', function(){
        beforeEach(function(){
            $('#test').oktype();
        });        

        it('adds a class', function(){
            $('#test').trigger('mouseenter');
            expect($('#test').hasClass('oktype-hovering')).toBe(true);
            $('#test').trigger('mouseleave');
            expect($('#test').hasClass('oktype-hovering')).not.toBe(true);
        });

        it('changes the typeface', function(){
            originalFont = $('#test').css('fontFamily');            
            $('#test').trigger('mouseenter')
            waits(200);
            runs(function(){
                expect($('#test').css('fontFamily')).not.toEqual(originalFont);
                $('#test').trigger('mouseleave');
            });
        });

        it('restores the typeface to its original state after hover', function(){
            originalFont = $('#test').css('fontFamily');
            $('#test').trigger('mouseenter');
            waits(200);
            runs(function(){
                expect(originalFont).not.toEqual($('#test').css('fontFamily'));
                $('#test').trigger('mouseleave');
                expect($('#test').css('fontFamily')).toEqual(originalFont);            
            });
        });
    });

    describe('with custom options', function(){
        beforeEach(function(){
            $('#test').oktype({
                randomColor: true,
                minSize: 1,
                maxSize: 100,
                randomDecoration: true,
                minSpace: -1,
                maxSpace: 25,
                toggleCase: true,
                weight: 'random'
            });
        });        

        it('can change color', function(){
            $('#test').trigger('mouseenter');
            waits(200);
            runs(function(){
                expect($('#test').css('color')).not.toEqual("rgb(0, 0, 0)");            
                $('#test').trigger('mouseleave');
            });
        });

        it('can change size', function(){
            $('#test').trigger('mouseenter');
            waits(200);
            runs(function(){
                expect($('#test').css('font-size')).not.toEqual("20px");
                $('#test').trigger('mouseleave');
            });        
        });

        it('can change text decoration', function(){
            $('#test').trigger('mouseenter');
            waits(200);
            runs(function(){
                expect($('#test').css('text-decoration')).toBeTruthy();
                $('#test').trigger('mouseleave');
            });
        });

        it('can change letter spacing', function(){
            $('#test').trigger('mouseenter');
            waits(200);
            runs(function(){
                expect($('#test').css('letter-spacing')).not.toEqual('normal');
                $('#test').trigger('mouseleave');
            });            
        });

        it('can change letter case', function(){
            $('#test').trigger('mouseenter');
            waits(200);
            runs(function(){
                expect($('#test').css('text-transform')).not.toEqual('none');
                $('#test').trigger('mouseleave');
            });
        });

        it('can change weight', function(){
            $('#test').trigger('mouseenter');
            waits(200);
            runs(function(){
                expect($('#test').css('font-weight')).not.toEqual('normal');
                $('#test').trigger('mouseleave');
            });
        });

    });

});
