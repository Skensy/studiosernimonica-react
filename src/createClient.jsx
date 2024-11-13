import React, { useState, useEffect } from "react";
import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = contentful.createClient({
  space: "my7z9vuv0xqr",
  accessToken: "rkE7ZRUotcx65wTuKG9ubq57IJW2yxvxemR5TQRtFXs",
});

const Posts = () => {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    client
      .getEntry("2wMAVQ78z4AXT34aoTVxot")
      .then((entry) => setEntry(entry))
      .catch(console.error);
  }, []);

  if (!entry) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-black">{entry.fields.titolo}</h1>
      <div className="text-black">
        
      </div>
    </div>
  );
};

export default Posts;
