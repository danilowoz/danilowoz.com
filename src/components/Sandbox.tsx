import React, { useEffect, useState } from "react";
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

export const Sandbox: React.FC<{
  sandboxId: string;
  title: string;
  description: string;
  showRefreshButton: boolean;
}> = ({ sandboxId, title, description, showRefreshButton = false }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [files, setFiles] = useState();
  const [env, setEnv] = useState();

  useEffect(() => {
    fetch(
      `https://codesandbox.io/api/v1/sandboxes/csb-id-${sandboxId}/sandpack`
    )
      .then((res) => res.json())
      .then((data) => {
        setFiles(
          Object.entries(data.files)
            .filter(([name]) => !name.startsWith("/."))
            .reduce((acc, curr) => {
              acc[curr[0]] = curr[1];
              return acc;
            }, {})
        );
        setEnv(data.environment);
      });
  }, []);

  if (!files || !env) return null;

  return (
    <SandpackProvider
      files={files}
      template={env}
      options={{
        bundlerURL:
          env === "react"
            ? "https://sandpack-bundler.codesandbox.io"
            : undefined,
        initMode: "immediate",
      }}
    >
      <SandpackLayout>
        <SandpackPreview
          showRefreshButton={showRefreshButton}
          showOpenInCodeSandbox={false}
        />
      </SandpackLayout>

      <div className="sandbox-details">
        <div className="sandbox-details__content">
          <p className="sandbox-details__title type_headline color-0">
            {title}
          </p>

          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="sandbox-details__cta text-highlight"
            data-open={showDetails}
          >
            <span>{showDetails ? "Hide code" : "Show code"}</span>

            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <p className="sandbox-details__desc color-1">{description}</p>
      </div>

      {showDetails && (
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor closableTabs showTabs />
        </SandpackLayout>
      )}
    </SandpackProvider>
  );
};
