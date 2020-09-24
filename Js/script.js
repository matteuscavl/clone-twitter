const btnTweetar = $('.btn-enviar')

btnTweetar.click(function() {
    renderContainerPrincipal();
    renderInfoPost();
})

const renderContainerPrincipal = () => {
    let divTweet = $('<div>');
    divTweet.addClass('div-tweet');
    $('.main-container').append(divTweet)
    $(divTweet).append(renderFoto());
    $(divTweet).append(renderDivPostagem());

}

const renderFoto = () => {
    let divFotoUsuario = $('<div>')
    divFotoUsuario.addClass('foto-usuario')
    let fotoUser = $('<img>')

    fotoUser.attr('src', '../image/foto-usuario.png');
    fotoUser.addClass('foto-tweet')

    divFotoUsuario.append(fotoUser)

    return divFotoUsuario;
}

const renderDivPostagem = () => {
    let divPostagem = $('<div>');
    divPostagem.addClass('div-postagem');

    divPostagem.append(renderInfoPost());
    divPostagem.append(renderPostagem())
    // divPostagem.append(selectPost());
    return divPostagem;
}

const renderInfoPost = () => {
    let divInfoPost = $('<div>')
    divInfoPost.addClass('info-post')

    let firstParagraph = $('<p>')
    firstParagraph.html('Você tweetou');
    divInfoPost.append(firstParagraph);

    let secondParagraph = $('<p>');
    secondParagraph.html('@Você');

    divInfoPost.append(secondParagraph);

    return divInfoPost;
    
}

const renderPostagem = () => {
    let divPost = $('<div>');
    divPost.addClass('postagem');
    
    let textoInput = $('.input-tweetar').val();
    let twitterPost = $('<p>')
    twitterPost.html(textoInput);

    divPost.append(twitterPost)
    return divPost;
}

// const selectPost = () => {
//     let divSelectPost = $('<div>');
//     divSelectPost.addClass('select-post')
//     let item1 = $('i')
//     let item2 = $('i')
//     let item3 = $('i')
//     let item4 = $('i')

//     item1.addClass('far fa-comment');
//     item2.addClass('fas fa-retweet');
//     item3.addClass('far fa-heart');
//     item4.addClass('fas fa-upload');

//     divSelectPost.append(item1, item2, item3, item4);
//     return divSelectPost
// }