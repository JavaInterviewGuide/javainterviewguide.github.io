$(function () {
    // 代码块功能依赖
    $('pre').wrap('<div class="code-area" style="position: relative"></div>');

    // 代码块语言识别
    var $highlight_lang = $('<div class="code_lang" title="Code"></div>');
    $('pre').after($highlight_lang);
    $('pre').each(function () {
        var code_language = $(this).attr('class');

        if (!code_language) {
            return true;
        };
        var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();

        // 首字母大写
        lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
        $(this).siblings(".code_lang").text(lang_name);
    });

    // 代码块一键复制
    var $copyIcon = $('<i class="fa fa-copy code_copy" title="复制代码" aria-hidden="true"></i>');
    $('.code-area').prepend($copyIcon);
    new ClipboardJS('.fa-copy', {
        target: function (trigger) {
            return trigger.nextElementSibling;
        }
    });

    // 代码块收缩
    var $code_expand = $('<i class="fa fa-chevron-down code-expand" title="折叠代码" aria-hidden="true"></i>');

    $('.code-area').prepend($code_expand);
    $('.code-expand').on('click', function () {
        if ($(this).parent().hasClass('code-closed')) {
            $(this).siblings('pre').find('code').show();
            $(this).parent().removeClass('code-closed');
        } else {
            $(this).siblings('pre').find('code').hide();
            $(this).parent().addClass('code-closed');
        }
    });
});