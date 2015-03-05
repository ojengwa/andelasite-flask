'use strict';

angular.module('core').directive('memberDetailView', [
    function() {

        function bindMiniProfile(member) {
            var memberGrid = member.parent('#member-grid');
            var members = memberGrid.find('.member');
            var gridWidth = memberGrid.outerWidth();
            var memberWidth = member.outerWidth();
            var memberCount = members.length;
            var memberIndex = members.index(member);
            var trackingIndex = memberIndex;
            var columnCount = Math.floor(gridWidth / memberWidth);
            var lastRowCount = (memberCount % columnCount) || columnCount;
            var isInLastRow = memberIndex >= (memberCount - lastRowCount);
            var isFirstInRow = true;

            while (trackingIndex % columnCount !== 0) {
                isFirstInRow = false;
                trackingIndex += 1;
            }

            var insertionIndex = trackingIndex;
            var insertEl = null;
            var miniProfile = $('.member-expanded');

            if (isInLastRow) {
                // insert after last member element in grid
                insertEl = memberGrid.find('.member:last');
                miniProfile.insertAfter(insertEl);
            } else if (isFirstInRow) {
                // insert before first member element in next row
                insertionIndex = trackingIndex + columnCount;
                insertEl = memberGrid.find('.member').eq(insertionIndex);
                miniProfile.insertBefore(insertEl);
            } else {
                // insert before the member element
                insertEl = memberGrid.find('.member').eq(insertionIndex);
                miniProfile.insertBefore(insertEl);
            }

            miniProfile.show();
        }

        function showMiniProfile() {
            $('.member-expanded').show();
        }

        function hideMiniProfile() {
            $('.member-expanded').hide();
        }

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var member = $(element);

                member.on('click', function() {
                    if (member.hasClass('member-active')) {
                        member.removeClass('member-active');
                        hideMiniProfile();
                    } else {
                        bindMiniProfile(member);
                        showMiniProfile();
                        member.addClass('member-active');
                    }
                });
            }
        };
    }
]);
