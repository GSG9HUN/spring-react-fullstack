package com.example.demo.service;

import com.example.demo.entity.Comment;
import com.example.demo.repository.CommentRepository;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;
    private static final Logger log = LoggerFactory.getLogger(CommentService.class);

    public void storeComment(Comment comment) {
        commentRepository.save(comment);
    }

    public Comment[] getAllCommentByMovieId(int movieID) {
        return this.commentRepository.findAllByMovieIDOrderByIDDesc(movieID);
    }

    public boolean deleteCommentByID(int ID) {
        log.info("Deleting comment by ID(" + ID + ")");
        try {
            this.commentRepository.deleteById(ID);
            log.info("Comment Deleted.");
            return true;
        } catch (Exception e) {
            log.error("Comment not deleted because exception occurred.");
            log.error(e.getMessage());
            return false;
        }
    }
}
