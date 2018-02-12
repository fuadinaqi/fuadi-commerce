$('.ui.search')
  .search({
    apiSettings: {
      url: '//api.github.com/search/repositories?q={query}'
    },
    fields: {
      results : 'items',
      title   : 'name',
      url     : 'html_url'
    },
    minCharacters : 3
  });

$('.dropdown')
  .dropdown({
    // you can use any ui transition
    transition: 'drop'
  })
;

// showing multiple
$('.visible.example .ui.sidebar')
  .sidebar({
    context: '.visible.example .bottom.segment'
  })
  .sidebar('hide')
;

$('.toggle.example .rating')
  .rating({
    initialRating: 2,
    maxRating: 4
  })
;

$('.toggle.example .rating')
  .rating('enable')
;

$('.clearing.example .rating')
  .rating('setting', 'clearable', true)
;

$('.special.cards .image').dimmer({
  on: 'hover'
});
