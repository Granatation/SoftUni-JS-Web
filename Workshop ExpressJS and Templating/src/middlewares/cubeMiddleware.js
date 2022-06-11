exports.isOwner = (req, res, next) => {
    if (req.params.cubeId !== req.user._id) {
        res.redirect('/404');
    }

    next();
}