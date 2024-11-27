WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// First section slider
	let firstSectionSlider = document.querySelector('.first_section .swiper')

	if (firstSectionSlider) {
		new Swiper('.first_section .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 'auto'
				},
				1440: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.product')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	$('.products .list').addClass('grid').removeClass('list')


	// Contacts info slider
	const contactsInfoSliders = [],
		contactsInfo = document.querySelectorAll('.contacts_info .images .swiper')

	contactsInfo.forEach((el, i) => {
		el.classList.add('contacts_info_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1
		}

		contactsInfoSliders.push(new Swiper('.contacts_info_s' + i, options))
	})


	// Product page slider
	const productSliders = [],
		product = document.querySelectorAll('.product_info .images .swiper')

	product.forEach((el, i) => {
		el.classList.add('product_info_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: el.classList.contains('gallery') ? '.swiper-pagination' : null,
				type: el.classList.contains('gallery') ? 'fraction' : null
			},
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1
		}

		productSliders.push(new Swiper('.product_info_s' + i, options))
	})


	// Compare slider
	let compareSlider = document.querySelector('.compare_info .swiper')

	if (compareSlider) {
		new Swiper('.compare_info .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			lazy: true,
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			},
			on: {
				init: () => compareHeight(),
				resize: () => compareHeight()
			}
		})
	}


	// Projects slider
	const projectsSliders = [],
		projects = document.querySelectorAll('.projects .swiper')

	projects.forEach((el, i) => {
		el.classList.add('projects_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 2
				}
			}
		}

		projectsSliders.push(new Swiper('.projects_s' + i, options))
	})


	// News slider
	const newsSliders = [],
		news = document.querySelectorAll('.news .swiper')

	news.forEach((el, i) => {
		el.classList.add('news_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			slidesPerView: 'auto',
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 40,
				},
				480: {
					spaceBetween: 40,
				},
				768: {
					spaceBetween: 40,
				},
				1280: {
					spaceBetween: 40,
				}
			}
		}

		newsSliders.push(new Swiper('.news_s' + i, options))
	})


	// Benefits slider
	const benefitsSliders = [],
		benefits = document.querySelectorAll('.benefits .swiper')

	benefits.forEach((el, i) => {
		el.classList.add('benefits_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			scrollbar: {
				el: '.swiper-scrollbar',
			},
			breakpoints: {
				0: {
					spaceBetween: 40,
					slidesPerView: 3
				},
				480: {
					spaceBetween: 40,
					slidesPerView: 3
				},
				768: {
					spaceBetween: 40,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			}
		}

		benefitsSliders.push(new Swiper('.benefits_s' + i, options))
	})


	// About images slider
	let aboutImagesSlider = document.querySelector('.about_page .images .swiper')

	if (aboutImagesSlider) {
		new Swiper('.about_page .images .swiper', {
			loop: true,
			speed: 500,
			autoHeight: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		})
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_delete"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Focus when clicking on the field name
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Select file
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label .path').innerText = el.value)
		})
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screen
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Aside - Categories
	$('aside .categories .items a.sub_link').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next('.sub').slideToggle(300)
	})


	// Change quantity
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})


	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})


	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})


	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Categories catalog
	$('.categories_catalog .category .spoler_btn').click(function(e) {
		e.preventDefault()

		let category = $(this).closest('.category')

		$(this).toggleClass('active')

		category.find('.sub .hide').slideToggle(300)
	})


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if($(this).closest('.catalog').length || $(this).closest('.all_site').length) {
				$('header .overlay').fadeOut(200)
			}

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if($(this).closest('.catalog').length || $(this).closest('.all_site').length) {
				$('header .overlay').fadeIn(200)
			}

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})


	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Close the popup when you click on the cross in the popup
	$('.mini_modal .close_btn').click(e => {
		e.preventDefault()

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Custom select - Nice select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Products views
	$('.products_head .views .btn').click(function(e) {
		e.preventDefault()

		let products = $(this).closest('.products_head').next('.products')

		$('.products_head .views .btn').removeClass('active')
		$(this).addClass('active')

		$(this).hasClass('grid_btn')
			? products.find('.list').addClass('grid').removeClass('list')
			: products.find('.grid').addClass('list').removeClass('grid')
	})


	// Filter
	$('.filter_btn, .wrap > .overlay, #filter .head .close_btn').click(function(e) {
		e.preventDefault()

		$('#filter').toggleClass('show')

		$('#filter').hasClass('show')
			? $('.wrap > .overlay').fadeIn(300)
			: $('.wrap > .overlay').fadeOut(300)
	})


	$('#filter .form .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).toggleClass('active')

		parent.find('.hide').slideToggle(300)
	})


	priceRange = $('#filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 150,
		from: 0,
		to: 125,
		step: 0.01,
		onChange: data => {
			$('#filter .price_range input.from').val(data.from.toFixed(2))
			$('#filter .price_range input.to').val(data.to.toFixed(2))
		},
		onUpdate: data => {
			$('#filter .price_range input.from').val(data.from.toFixed(2))
			$('#filter .price_range input.to').val(data.to.toFixed(2))
		}
	}).data('ionRangeSlider')

	$('#filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('#filter .price_range input.from').val()),
			to: parseInt($('#filter .price_range input.to').val())
		})
	})


	$('.reset_filter_btn').click(function() {
		if(priceRange) {
			priceRange.reset()
		}

		$('#filter form').get(0).reset()
	})


	// Requisite
	$('.contacts_info .requisite_btn, .wrap > .overlay, .requisite_info .close_btn').click(function(e) {
		e.preventDefault()

		$('.requisite_info').toggleClass('show')

		$('.requisite_info').hasClass('show')
			? $('.wrap > .overlay').fadeIn(300)
			: $('.wrap > .overlay').fadeOut(300)
	})


	// Product page - Calc. solution
	$('.product_info .calc_solution .head').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.calc_solution')

		parent.toggleClass('active')
		parent.find('.info').slideToggle(300)
	})


	// Catalog
	$('header .catalog .main a').mouseenter(function(e) {
		let sub = $(this).data('sub')

		$('header .catalog .main a').removeClass('active')
		$(this).addClass('active')

		$('header .catalog .sub').hide()
		$('header .catalog .' + sub).fadeIn(300)
	})


	if (is_touch_device()) {
		$('header .catalog .main a').click(function(e) {
			e.preventDefault()

			let sub = $(this).data('sub')

			$('header .catalog .main a').removeClass('active')
			$(this).addClass('active')

			$('header .catalog .sub').removeClass('show')
			$('header .catalog .' + sub).addClass('show')
		})


		$('header .catalog .sub .back_btn').click(function(e) {
			e.preventDefault()

			$('header .catalog .sub').removeClass('show')
		})


		$('header .catalog .item .name a.sub_link').click(function(e) {
			e.preventDefault()

			$(this).toggleClass('active')
			$(this).closest('.name').next().slideToggle(300)
		})
	}
})



window.addEventListener('load', function () {
	// Aligning elements in the grid
	document.querySelectorAll('.products .grid').forEach(el => {
		let styles = getComputedStyle(el)

		productsHeight(el, parseInt(styles.getPropertyValue('--count')))
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Aligning elements in the grid
		document.querySelectorAll('.products .grid').forEach(el => {
			let styles = getComputedStyle(el)

			productsHeight(el, parseInt(styles.getPropertyValue('--count')))
		})


		// Products
		if (WW < 1900) {
			$('.products .list').addClass('grid').removeClass('list')
		}


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Alignment of products
function productsHeight(context, step) {
	let start = 0,
		finish = step,
		products = [...context.children],
		i = 0

	products.forEach(el => el.style.minHeight = 'auto')

	products.forEach(el => {
		products.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"]'))

		start = start + step
		finish = finish + step
		i++
	})
}



// Compare height
function compareHeight() {	// Reset heights
	$('.compare_info .feature_labels > *, .compare_info .product .features > *').height('auto')

	let featureLabels = $('.compare_info .feature_labels > *'),
		featureVals = $('.compare_info .product .features'),
		sizes = new Object()


	featureVals.each(function () {
		$(this).find('> *').each(function () {
			let index = $(this).index(),
				height = $(this).outerHeight()

			if (sizes[index]) {
				if (height > sizes[index]) {
					sizes[index] = height
				}
			} else {
				sizes[index] = height
			}
		})
	})


	featureLabels.each(function () {
		let index = $(this).index(),
    		height = $(this).outerHeight()

		if (sizes[index]) {
			if (height > sizes[index]) {
				sizes[index] = height
			}
		} else {
			sizes[index] = height
		}
	})


	// Set height
	$.each(sizes, (key, height) => {
		featureVals.each(function () {
			$(this).find('> *').eq(key).innerHeight(height)
		})

		featureLabels.eq(key).innerHeight(height)
	})
}