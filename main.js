$("input").on("input", function ()
{
    var red = $(".r").val()
    var green = $(".g").val()
    var blue = $(".b").val()
    $("body").css("background", `rgb(${red},${green},${blue})`)
    var content = `rgb(${red},${green},${blue})`
    $(".rgb-content").html(`<p>${content}</p>`)
    function valueToHex(c)
    {
        c = Number(c)
        var hex = c.toString(16);
        return hex
    }
    function rgbToHex(red, green, blue)
    {
        return (valueToHex(red) + valueToHex(green) + valueToHex(blue));
    }
    $(".txt-area").html("#" + rgbToHex(red, green, blue))
})


$(".icon").click(function ()
{
    navigator.clipboard.writeText($(".txt-area").text())
    let iconCont = $(this).html()
    $(this).text('copied')
    setTimeout(() =>
    {
        $(this).html(iconCont)
    }, 1000);
})
$(".copy").click(function ()
{
    navigator.clipboard.writeText($(".rgb-content").text())
    let iconCont = $(this).html()
    $(this).text('copied')
    setTimeout(() =>
    {
        $(this).html(iconCont)
    }, 1000);
})
