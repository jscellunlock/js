 $(document).ready(function () {
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
        });
         $(document).ready(function () {
            $('.show-quote-form').click(function () {
                $('.form-quote-area, .qtd-hidden').show();
                $('.sidebar-cart .form-edit, .sidebar-cart .delete-column').hide();
                $(this).hide();
            })
        });
         $(document).ready(function () {
            $('.filter-category').click(function (event) {
                event.preventDefault();
                $(this).parents('ul').find('.value').val($(this).attr('id'));
                $(this).parents('.form-filtros').prop('action', $(this).data('action'));
                $(this).parents('.form-filtros').submit();
            })
            $('.filter-checkbox').change(function (event) {
                $(this).parents('.form-filtros').submit();
            })
            $('.filter-order').change(function (event) {
                $('.form-filtros').first().find('.order').val($(this).val());
                $('.form-filtros').first().submit();
            })
        })
 $(function () {
            'use strict'
            $('[data-toggle="offcanvas"]').on('click', function () {
                $('.offcanvas-collapse').toggleClass('open');
            });
        });
        function openSidebar(section) {
            $('.offcanvas-collapse').removeClass('open');
            $('.sidebar .sidebar-section').hide();
            $('.sidebar .sidebar-' + section).show();
            $('.offcanvas-collapse').addClass('open');
            $('.offcanvas-bg-overlay').hide().fadeIn('slow');
            $('html, body').addClass('overflow-hidden');
        }
        $(document).ready(function () {
            $('.open-sidebar').click(function () {
                $('.offcanvas-collapse').removeClass('left');
                if ($(this).data('from') == 'left') {
                    $('.offcanvas-collapse').addClass('left');
                }
                openSidebar($(this).data('section'));
                return false;
            });
            $('.close-sidebar').click(function () {
                $('.offcanvas-collapse').removeClass('open');
                $('.offcanvas-bg-overlay').fadeOut('slow');
                $('html, body').removeClass('overflow-hidden');
                return false;
            });
        });
         $(document).ready(function () {
            $('.filter-category').click(function (event) {
                event.preventDefault();
                $(this).parents('ul').find('.value').val($(this).attr('id'));
                $(this).parents('.form-filtros').prop('action', $(this).data('action'));
                $(this).parents('.form-filtros').submit();
            })
            $('.filter-checkbox').change(function (event) {
                $(this).parents('.form-filtros').submit();
            })
            $('.filter-order').change(function (event) {
                $('.form-filtros').first().find('.order').val($(this).val());
                $('.form-filtros').first().submit();
            })
        })
        function setProductsColumns(columns) {
            setCookie("productsColumns", columns, 190);
            $('.product-list-item').removeClass('col-12 col-6 col-md-3 col-md-4').addClass(columns);
            let columnsSlug = columns.replace(/ /g, "-");
            $('.set-products-columns .square-container .square').removeClass('filled');
            $('.set-products-columns' + '.' + columnsSlug + ' .square-container .square').addClass('filled');
        }
        $(document).ready(function () {
            var productsColumns = getCookie("productsColumns");
            if (productsColumns) {
                setProductsColumns(productsColumns);
            } else {
                setProductsColumns('col-6 col-md-4');
            }
            $('.set-products-columns').click(function (e) {
                var columns = $(this).data('columns');
                setProductsColumns(columns);
                e.preventDefault();
            });
        })
        document.addEventListener("DOMContentLoaded", function () {
            const filterBar = document.getElementById("filterBar");
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
                const filterBar = document.getElementById("filterBar");
                const body = document.body;
                let filterBarOffset = filterBar.getBoundingClientRect().top + window.pageYOffset + 10;
                toggleSticky();
            });
        });
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
                $('.nav-categories-go-level-1').click(function (e) {
                    showNavCategoriesLevel1();
                    e.preventDefault();
                });
                $('.nav-categories-go-level-2').click(function (e) {
                    var categoryId = $(this).data('id');
                    showNavCategoriesLevel2(categoryId);
                    e.preventDefault();
                });
            })
             $(document).ready(function () {
                $(".spinner-input-sm").inputSpinner({ groupClass: "input-group-sm" })
            });

           
    <script type="text/javascript">
        $(document).ready(function () {
            $('.service-list').searchService({ searchBox: '#searchservicebox2' });
        });

        function popupOrder(ServicesID, servicename) {
            if (servicename != '') {
                $('.servicename').text(servicename);
            }
            $('.service-title').text(servicename);
            $('#service-id').val(ServicesID);
            $('#modal-order').show();
            getServicedetailsIMEI(ServicesID, '#serviceDetails2', '.alert', true, '#loader', '', '', '#information', 0);
        }

        $(document).ready(function () {
            var shortcuts = $('.shortcuts').clone();
            $('.shortcuts-mobile-area').html(shortcuts);
            $('.shortcuts-mobile-area .shortcuts').addClass('d-block d-sm-none');
        });
    
   