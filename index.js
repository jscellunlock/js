// ============================
// 1. CLONAGEM DE ELEMENTOS DE ATALHOS PARA MOBILE
// ============================
$(document).ready(function () {
    if ($('.shortcuts').length && $('.shortcuts-mobile-area').length) {
        var shortcuts = $('.shortcuts').clone();
        $('.shortcuts-mobile-area').html(shortcuts);
        $('.shortcuts-mobile-area .shortcuts').addClass('d-block d-sm-none');
    }
});

// ============================
// 2. MENU DE CATEGORIAS NÍVEL 1 E 2
// ============================
function showNavCategoriesLevel1() {
    $('.nav-categories-level-2').fadeOut('fast').promise().done(function () {
        $('.nav-categories-level-1').fadeIn('fast');
    });
}

function showNavCategoriesLevel2(id) {
    $('.nav-categories-level-1').fadeOut('fast').promise().done(function () {
        $('.nav-categories-level-2.nav-category-children-' + id).fadeIn();
    });
}

$(document).ready(function () {
    $('.nav-categories-go-level-1').on('click', function (e) {
        e.preventDefault();
        showNavCategoriesLevel1();
    });
    $('.nav-categories-go-level-2').on('click', function (e) {
        e.preventDefault();
        var categoryId = $(this).data('id');
        showNavCategoriesLevel2(categoryId);
    });
});

// ============================
// 3. INPUT SPINNER PEQUENO (QUANTIDADE) — FIX ERRO
// ============================
$(document).ready(function () {
    if (typeof $.fn.inputSpinner === 'function' && $('.spinner-input-sm').length) {
        $(".spinner-input-sm").inputSpinner({ groupClass: "input-group-sm" });
    }
});

// ============================
// 4. FORMULÁRIO DE ORÇAMENTO
// ============================
$(document).ready(function () {
    $('.show-quote-form').on('click', function () {
        $('.form-quote-area, .qtd-hidden').show();
        $('.sidebar-cart .form-edit, .sidebar-cart .delete-column').hide();
        $(this).hide();
    });
});

// ============================
// 5. FILTROS DE PRODUTOS
// ============================
$(document).ready(function () {
    $('.filter-category').on('click', function (event) {
        event.preventDefault();
        $(this).parents('ul').find('.value').val($(this).attr('id'));
        $(this).parents('.form-filtros').prop('action', $(this).data('action'));
        $(this).parents('.form-filtros').submit();
    });

    $('.filter-checkbox').on('change', function () {
        $(this).parents('.form-filtros').submit();
    });

    $('.filter-order').on('change', function () {
        $('.form-filtros').first().find('.order').val($(this).val());
        $('.form-filtros').first().submit();
    });
});

// ============================
// 6. TOGGLE DO MENU OFFCANVAS (SIDEBAR)
// ============================
function openSidebar(section) {
    $('.offcanvas-collapse').removeClass('open');
    $('.sidebar .sidebar-section').hide();
    $('.sidebar .sidebar-' + section).show();
    $('.offcanvas-collapse').addClass('open');
    $('.offcanvas-bg-overlay').hide().fadeIn('slow');
    $('html, body').addClass('overflow-hidden');
}

$(document).ready(function () {
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open');
    });

    $('.open-sidebar').on('click', function () {
        $('.offcanvas-collapse').removeClass('left');
        if ($(this).data('from') === 'left') {
            $('.offcanvas-collapse').addClass('left');
        }
        openSidebar($(this).data('section'));
        return false;
    });

    $('.close-sidebar').on('click', function () {
        $('.offcanvas-collapse').removeClass('open');
        $('.offcanvas-bg-overlay').fadeOut('slow');
        $('html, body').removeClass('overflow-hidden');
        return false;
    });
});

// ============================
// 7. CONFIGURAÇÃO DE COLUNAS DE PRODUTOS — FIX COOKIE
// ============================
function setProductsColumns(columns) {
    if (typeof setCookie === 'function') {
        setCookie("productsColumns", columns, 190);
    }
    $('.product-list-item')
        .removeClass('col-12 col-6 col-md-3 col-md-4')
        .addClass(columns);

    let columnsSlug = columns.replace(/ /g, "-");
    $('.set-products-columns .square-container .square').removeClass('filled');
    $('.set-products-columns.' + columnsSlug + ' .square-container .square').addClass('filled');
}

$(document).ready(function () {
    var productsColumns = (typeof getCookie === 'function' && getCookie("productsColumns")) || 'col-6 col-md-4';
    setProductsColumns(productsColumns);

    $('.set-products-columns').on('click', function (e) {
        e.preventDefault();
        setProductsColumns($(this).data('columns'));
    });
});

// ============================
// 8. FIXAR BARRA DE FILTRO EM MOBILE — FIX NULL
// ============================
document.addEventListener("DOMContentLoaded", function () {
    const filterBar = document.getElementById("filterBar");
    if (!filterBar) return;

    const body = document.body;
    let filterBarOffset = filterBar.getBoundingClientRect().top + window.pageYOffset + 10;

    function toggleSticky() {
        if (window.innerWidth <= 767) {
            if (window.pageYOffset > filterBarOffset) {
                filterBar.classList.add("fixed");
                body.classList.add("filters-fixed");
            } else {
                filterBar.classList.remove("fixed");
                body.classList.remove("filters-fixed");
            }
        }
    }

    window.addEventListener("scroll", toggleSticky);
    window.addEventListener("resize", function () {
        filterBarOffset = filterBar.getBoundingClientRect().top + window.pageYOffset + 10;
        toggleSticky();
    });
});

// ============================
// 9. CAROUSELS — FIX DUPLO INIT
// ============================
$(document).ready(function () {

    if ($('.slide-show-carousel').length && typeof $.fn.owlCarousel === 'function') {
        if (!$('.slide-show-carousel').hasClass('owl-loaded')) {
            $('.slide-show-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1000,
                dots: true,
                autoHeight: true,
                items: 1
            });
        }
    }

    if ($('.banners-topo-carousel').length && typeof $.fn.owlCarousel === 'function') {
        if (!$('.banners-topo-carousel').hasClass('owl-loaded')) {
            $('.banners-topo-carousel').owlCarousel({
                autoplay: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoHeight: true,
                loop: true,
                margin: 0,
                dots: false,
                nav: false,
                slideBy: 1,
                items: 1
            });
        }
    }

});

// ============================
// MENU LATERAL — GARANTIA SEM ERRO
// ============================
$(document).on('click', '.open-sidebar', function (e) {
    e.preventDefault();
    $('.offcanvas-collapse').addClass('open');
    $('.offcanvas-bg-overlay').stop(true, true).fadeIn(200);
    $('html, body').addClass('overflow-hidden');
});

$(document).on('click', '.close-sidebar, .offcanvas-bg-overlay', function (e) {
    e.preventDefault();
    $('.offcanvas-collapse').removeClass('open');
    $('.offcanvas-bg-overlay').stop(true, true).fadeOut(200);
    $('html, body').removeClass('overflow-hidden');
});
