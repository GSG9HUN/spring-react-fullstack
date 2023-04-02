package com.example.demo.controller;

import com.example.demo.entity.Comment;
import com.example.demo.service.CommentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class CommentController {
    private final CommentService commentService;
    private static final Logger log = LoggerFactory.getLogger(CommentController.class);

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/comment/{movieID}")
    public Comment[] getComments(@PathVariable int movieID) {
        log.info("Get API function for all comments.");
        return this.commentService.getAllCommentByMovieId(movieID);
    }

    @PostMapping("/comment")
    public void storeComment(@RequestBody Comment comment) {
        log.info("Store API function.");
        this.commentService.storeComment(comment);
    }

    @DeleteMapping("/comment/{ID}")
    public ResponseEntity<Map<String, String>> deleteComment(@PathVariable int ID) {
        log.info("Deleting API function for specified comment.");
        Map<String, String> response = new HashMap<>();
        if (this.commentService.deleteCommentByID(ID)) {

            response.put("data", "Successful");
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        response.put("error", "Something is went wrong!");
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
